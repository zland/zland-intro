/*!
 * Copyright 2015 Florian Biewald
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('intro/sass/style');

var React = require('react');
var ModalMixin = require('core/components/ModalMixin');
var LinkMixin = require('core/components/LinkMixin');
var CoreActionCreators = require('core/actions/CoreActionCreators');
var NavigationMixin = require('react-router').Navigation;

module.exports = React.createClass({

  mixins: [ModalMixin, NavigationMixin],

  close: function() {
    CoreActionCreators.introductionDone();
    this.hide((function() {
      this.transitionTo('/');
    }).bind(this));
  },

  render: function() {
    var videoStyle = {
      "width": "100%",
      "height": "auto"
    };
    return (
      <div className="modal fade intro-window" ref="modal">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.close} aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Welcome to zland</h4>
                  </div>
                  <div className="modal-body">
                    <div id="carousel-example-captions" className="carousel slide" data-wrap="false" data-interval="false">
                      <div className="carousel-inner" role="listbox">
                        <div className="item active">
                          <img src="assets/zland-intro/img/slide1_zombie.png"/>
                          <div className="carousel-caption">
                            <p><span>Now whats this?</span></p>
                          </div>
                        </div>
                        <div className="item">
                          <img src="assets/zland-intro/img/slide2_knifes.png"/>
                          <div className="carousel-caption">
                            <p><span>You know what to do...</span><br/> <span>Damn. No other weapons. This must do the trick.</span></p>
                          </div>
                        </div>
                        <div className="item">
                          <img src="assets/zland-intro/img/slide3_zland.png"/>
                          <div className="carousel-caption">
                            <p>Prepare to enter zland.</p>
                          </div>
                        </div>
                      </div>
                      <a className="left carousel-control" href="#carousel-example-captions" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="right carousel-control" href="#carousel-example-captions" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div className="modal-footer">
                  </div>
              </div>
          </div>
      </div>
    );
  }

});
