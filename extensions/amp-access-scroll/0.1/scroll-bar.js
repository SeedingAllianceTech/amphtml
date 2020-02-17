/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ScrollComponent} from './scroll-component';
import {dict} from '../../../src/utils/object';

/**
 * UI for Scroll users.
 *
 * Presents a fixed bar at the bottom of the screen with Scroll content.
 * @abstract
 */
class Bar extends ScrollComponent {
  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} doc
   * @param {!../../amp-access/0.1/amp-access-source.AccessSource} accessSource
   * @param {string} baseUrl
   */
  constructor(doc, accessSource, baseUrl) {
    super(doc);

    /** @protected */
    this.accessSource_ = accessSource;

    /** @protected */
    this.baseUrl_ = baseUrl;

    this.render_();
  }

  /** @private */
  render_() {
    this.mutate_(() => {
      if (!this.frame_) {
        this.frame_ = this.makeIframe_();
        this.setWindow_(this.frame_.contentWindow);
      }
    });
  }

  /**
   * @return {!HTMLIFrameElement}
   * @protected
   * */
  makeIframe_() {
    const frame = this.el(
      'iframe',
      dict({
        'scrolling': 'no',
        'frameborder': '0',
        'allowtransparency': 'true',
        'title': 'Scroll',
        'width': '100%',
        'height': '100%',
        'sandbox':
          'allow-scripts allow-same-origin ' +
          'allow-top-navigation allow-popups ' +
          'allow-popups-to-escape-sandbox',
      })
    );

    const root = this.el(
      'div',
      dict({
        'class': 'amp-access-scroll-bar',
      }),
      [frame]
    );

    this.mount_(root);

    return /** @type {!HTMLIFrameElement} */ (frame);
  }
}

export class ScrollUserBar extends Bar {
  /**
   * Load the scrollbar URL in the iframe.
   *
   * @override
   * */
  makeIframe_() {
    const frame = Bar.prototype.makeIframe_.call(this);
    // Set iframe to scrollbar URL.
    this.accessSource_
      .buildUrl(
        `${this.baseUrl_}/html/amp/scrollbar` +
          '?rid=READER_ID' +
          '&cid=CLIENT_ID(scroll1)' +
          '&c=CANONICAL_URL' +
          '&o=AMPDOC_URL',
        false
      )
      .then(scrollbarUrl => {
        frame.setAttribute('src', scrollbarUrl);
      });
    return frame;
  }
}
/**
 * Add link to the Scroll App connect page.
 */
export class ActivateBar extends Bar {
  /** @override */
  makeIframe_() {
    const frame = Bar.prototype.makeIframe_.call(this);

    this.accessSource_
      .buildUrl(
        `${this.baseUrl_}/html/amp/activate` +
          '?rid=READER_ID' +
          '&cid=CLIENT_ID(scroll1)' +
          '&c=CANONICAL_URL' +
          '&o=AMPDOC_URL' +
          '&x=QUERY_PARAM(scrollx)',
        false
      )
      .then(url => {
        frame.setAttribute('src', url);
      });
    return frame;
  }
}
