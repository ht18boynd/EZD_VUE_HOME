<template>
  <div>
    <!--HEADER PANEL-->
    <headerPanel></headerPanel>
    <!--/HEADER PANEL-->
    <!--NAVIGATION PANEL-->
    <navigationVue></navigationVue>
    <!--/NAVIGATION PANEL-->
    <categoriesBarVue></categoriesBarVue>

    <!-- MAIN CONTENT AREA -->
    <div class="primary-content-area bottom-padding-70">
      <div class="section-padding">
        <div id="homeSlider" class="swiper">
          <div class="swiper-wrapper">
            <div id="slide-1" class="swiper-slide">
              <picture>
                <source
                  type="image/avif"
                  srcset="avif/content/slider/slider-img-3.avif"
                />
                <img
                  src="assets/img/content/slider/slider-img-3.png"
                  width="940"
                  height="640"
                  alt="Slide Image"
                  loading="lazy"
                />
              </picture>

              <div class="dark-overlay"></div>
              <div class="slide-content">
                <div class="item-info">
                  <div class="item-meta">
                    <span class="avatar box-26">
                      <a href="08-profile-page.html">
                        <picture>
                          <source type="image/avif" srcset="avif/avatar.avif" />
                          <img
                            src="assets/img/avatar.png"
                            alt="avatar"
                            loading="lazy"
                            width="100"
                            height="100"
                          />
                        </picture>
                      </a>
                      <span class="verified"
                        ><svg class="crumina-icon">
                          <use xlink:href="#check-icon"></use></svg
                      ></span>
                    </span>
                    @DexterStark
                  </div>
                  <div class="title slide-title">Lost in Illustration</div>
                  <div class="item-bid-section">
                    <div class="bid-item">
                      <div class="label">Current bid</div>
                      <div class="value">2.31 ETH</div>
                    </div>
                    <div class="bid-item">
                      <div class="label">AUCTION ENDING IN</div>
                      <div class="countdown">
                        <div class="value">
                          <span
                            class="js-countdown"
                            data-timer="19560"
                            data-labels="d : , h : , m : , s"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="gradient-border_white-bg slide-button">
                      <a class="btn btn-normal" href="05-product-page.html"
                        >Go to Item!</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide-2" class="swiper-slide slide-content-align-right">
              <picture>
                <source
                  type="image/avif"
                  srcset="avif/content/slider/slider-img-1.avif"
                />
                <img
                  src="assets/img/content/slider/slider-img-1.png"
                  width="940"
                  height="640"
                  alt="Slide Image"
                />
              </picture>

              <div class="dark-overlay"></div>
              <div class="slide-content">
                <div class="slide-subtitle">WELCOME TO CRYPTOKI</div>
                <div class="slide-title">Discover the Best Artworks!</div>
                <div class="gradient-border-purple-bg slide-button">
                  <a class="btn btn-normal" href="02-explore.html"
                    >Explore Now!</a
                  >
                </div>
              </div>
            </div>
            <div id="slide-3" class="swiper-slide">
              <picture>
                <source
                  type="image/avif"
                  srcset="avif/content/slider/slider-img-2.avif"
                />
                <img
                  src="assets/img/content/slider/slider-img-2.png"
                  width="940"
                  height="640"
                  alt="Slide Image"
                  loading="lazy"
                />
              </picture>
              <div class="dark-overlay"></div>
              <div class="slide-content">
                <div class="item-info">
                  <div class="item-meta">
                    <span class="avatar box-26">
                      <a href="08-profile-page.html">
                        <picture>
                          <source type="image/avif" srcset="avif/avatar.avif" />
                          <img
                            src="assets/img/avatar.png"
                            alt="avatar"
                            loading="lazy"
                            width="100"
                            height="100"
                          />
                        </picture>
                      </a>
                      <span class="verified"
                        ><svg class="crumina-icon">
                          <use xlink:href="#check-icon"></use></svg
                      ></span>
                    </span>
                    @DexterStark
                  </div>
                  <div class="title slide-title">Breathing Nature</div>
                  <div class="item-bid-section">
                    <div class="bid-item">
                      <div class="label">Current bid</div>
                      <div class="value">2.31 ETH</div>
                    </div>
                    <div class="bid-item">
                      <div class="label">AUCTION ENDING IN</div>
                      <div class="countdown">
                        <div class="value">
                          <span
                            class="js-countdown"
                            data-timer="19353"
                            data-labels="d : , h : , m : , s"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="gradient-border_dark-bg slide-button">
                      <a class="btn btn-normal" href="06-product-page-v2.html"
                        >Go to Item!</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="homeslider-nav">
            <div class="swiper-button-next">
              <svg class="crumina-icon next-button">
                <use xlink:href="#arrow-right2-icon"></use>
              </svg>
            </div>
            <div class="swiper-button-prev">
              <svg class="crumina-icon prev-button">
                <use xlink:href="#arrow-left2-icon"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="container section-padding overflow-hidden">
        <div class="section-title-wrapper">
          <div class="section-title">
            <span class="gradient-text">Featured</span> Items
          </div>
          <div class="title-navigation">
            <div class="featured-carousel-icon swiper-button-prev">
              <svg class="crumina-icon">
                <use xlink:href="#arrow-left2-icon"></use>
              </svg>
            </div>
            <div class="featured-carousel-icon swiper-button-next">
              <svg class="crumina-icon">
                <use xlink:href="#arrow-right2-icon"></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="featured-carousel">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="featured-item">
                <div class="featured-item-wrapper">
                  <div class="featured-item-content">
                    <div class="fav-counter">
                      <svg class="crumina-icon">
                        <use xlink:href="#heart-icon"></use></svg
                      ><span class="count">22</span>
                    </div>
                    <div class="featured-item-image">
                      <a href="05-product-page.html">
                        <picture>
                          <source
                            type="image/avif"
                            srcset="avif/content/items/featured-item-1.avif"
                          />
                          <img
                            src="assets/img/content/items/featured-item-1.png"
                            width="304"
                            height="340"
                            alt="Featured"
                          />
                        </picture>
                      </a>
                    </div>
                    <div class="featured-item-info">
                      <div class="featured-countdown">
                        <span class="clock"
                          ><svg class="crumina-icon">
                            <use xlink:href="#clock-icon"></use></svg
                        ></span>
                        <span
                          class="js-countdown"
                          data-timer="76403"
                          data-labels="d : , h : , m : , s"
                        ></span>
                      </div>
                      <div class="title">
                        <a href="05-product-page.html">The Molten Heart</a>
                      </div>
                      <div class="item-meta">
                        <span class="avatar box-26">
                          <a href="08-profile-page.html">
                            <picture>
                              <source
                                type="image/avif"
                                srcset="avif/avatar.avif"
                              />
                              <img
                                src="assets/img/avatar.png"
                                alt="avatar"
                                loading="lazy"
                                width="100"
                                height="100"
                              />
                            </picture>
                          </a>
                          <span class="verified"
                            ><svg class="crumina-icon">
                              <use xlink:href="#check-icon"></use></svg
                          ></span>
                        </span>
                        @DexterStark
                      </div>
                    </div>
                  </div>
                  <div class="featured-item-post-content">
                    <div class="featured-item-pricebox">
                      <div class="price-caption">Current BID</div>
                      <div class="price">4.07 ETH</div>
                    </div>
                    <div class="social-share-box">
                      <div class="social-caption">Share</div>
                      <div class="share-icons">
                        <svg class="crumina-icon">
                          <use xlink:href="#facebook-icon"></use>
                        </svg>
                        <svg class="crumina-icon">
                          <use xlink:href="#twitter-icon"></use>
                        </svg>
                        <svg class="crumina-icon">
                          <use xlink:href="#instagram-icon"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="featured-item">
                <div class="featured-item-wrapper">
                  <div class="featured-item-content">
                    <div class="fav-counter">
                      <svg class="crumina-icon">
                        <use xlink:href="#heart-icon"></use></svg
                      ><span class="count">68</span>
                    </div>
                    <div class="featured-item-image">
                      <a href="06-product-page-v2.html">
                        <picture>
                          <source
                            type="image/avif"
                            srcset="avif/content/items/featured-item-2.avif"
                          />
                          <img
                            src="assets/img/content/items/featured-item-2.png"
                            width="304"
                            height="340"
                            alt="Featured"
                          />
                        </picture>
                      </a>
                    </div>
                    <div class="featured-item-info">
                      <div class="featured-countdown">
                        <span class="clock"
                          ><svg class="crumina-icon">
                            <use xlink:href="#clock-icon"></use></svg></span
                        ><span
                          class="js-countdown"
                          data-timer="66400"
                          data-labels="d : , h : , m : , s"
                        ></span>
                      </div>
                      <div class="title">
                        <a href="06-product-page-v2.html">Social Blockz</a>
                      </div>
                      <div class="item-meta">
                        <span class="avatar box-26">
                          <a href="08-profile-page.html"
                            ><img
                              src="assets/img/avatar-2.png"
                              height="52"
                              width="52"
                              alt=""
                              loading="lazy"
                          /></a>
                          <span class="verified"
                            ><svg class="crumina-icon">
                              <use xlink:href="#check-icon"></use></svg
                          ></span>
                        </span>
                        @JackieJ
                      </div>
                    </div>
                  </div>
                  <div class="featured-item-post-content">
                    <div class="featured-item-pricebox">
                      <div class="price-caption">Current BID</div>
                      <div class="price">1.96 ETH</div>
                    </div>
                    <div class="social-share-box">
                      <div class="social-caption">Share</div>
                      <div class="share-icons">
                        <svg class="crumina-icon">
                          <use xlink:href="#facebook-icon"></use>
                        </svg>
                        <svg class="crumina-icon">
                          <use xlink:href="#twitter-icon"></use>
                        </svg>
                        <svg class="crumina-icon">
                          <use xlink:href="#instagram-icon"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="featured-item">
                <div class="featured-item-wrapper">
                  <div class="featured-item-content">
                    <div class="fav-counter">
                      <svg class="crumina-icon">
                        <use xlink:href="#heart-icon"></use></svg
                      ><span class="count">105</span>
                    </div>
                    <div class="featured-item-image">
                      <a href="07-product-page-v3.html">
                        <picture>
                          <source
                            type="image/avif"
                            srcset="avif/content/items/featured-item-3.avif"
                          />
                          <img
                            src="assets/img/content/items/featured-item-3.png"
                            width="304"
                            height="340"
                            loading="lazy"
                            alt="Featured"
                          />
                        </picture>
                      </a>
                    </div>
                    <div class="featured-item-info">
                      <div class="featured-countdown">
                        <span class="clock"
                          ><svg class="crumina-icon">
                            <use xlink:href="#clock-icon"></use></svg></span
                        ><span
                          class="js-countdown"
                          data-timer="69400"
                          data-labels="d : , h : , m : , s"
                        ></span>
                      </div>
                      <div class="title">
                        <a href="07-product-page-v3.html">Breathing Nature</a>
                      </div>
                      <div class="item-meta">
                        <span class="avatar box-26">
                          <a href="08-profile-page.html">
                            <picture>
                              <source
                                type="image/avif"
                                srcset="avif/avatar.avif"
                              />
                              <img
                                src="assets/img/avatar.png"
                                alt="avatar"
                                loading="lazy"
                                width="100"
                                height="100"
                              />
                            </picture>
                          </a>
                          <span class="verified"
                            ><svg class="crumina-icon">
                              <use xlink:href="#check-icon"></use></svg
                          ></span>
                        </span>
                        @DexterStark
                      </div>
                    </div>
                  </div>
                  <div class="featured-item-post-content">
                    <div class="featured-item-pricebox">
                      <div class="price-caption">Current BID</div>
                      <div class="price">2.31 ETH</div>
                    </div>
                    <div class="social-share-box">
                      <div class="social-caption">Share</div>
                      <div class="share-icons">
                        <svg class="crumina-icon">
                          <use xlink:href="#facebook-icon"></use>
                        </svg>
                        <svg class="crumina-icon">
                          <use xlink:href="#twitter-icon"></use>
                        </svg>
                        <svg class="crumina-icon">
                          <use xlink:href="#instagram-icon"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="featured-item">
                <div class="featured-item-wrapper">
                  <div class="featured-item-content">
                    <div class="fav-counter">
                      <svg class="crumina-icon">
                        <use xlink:href="#heart-icon"></use></svg
                      ><span class="count">60</span>
                    </div>
                    <div class="featured-item-image">
                      <a href="05-product-page.html">
                        <picture>
                          <source
                            type="image/avif"
                            srcset="avif/content/items/featured-item-4.avif"
                          />
                          <img
                            src="assets/img/content/items/featured-item-4.png"
                            width="304"
                            height="340"
                            loading="lazy"
                            alt="Featured"
                          />
                        </picture>
                      </a>
                    </div>
                    <div class="featured-item-info">
                      <div class="featured-countdown">
                        <span class="clock"
                          ><svg class="crumina-icon">
                            <use xlink:href="#clock-icon"></use></svg></span
                        ><span
                          class="js-countdown"
                          data-timer="102400"
                          data-labels="d : , h : , m : , s"
                        ></span>
                      </div>
                      <div class="title">
                        <a href="05-product-page.html">Flow of Planets</a>
                      </div>
                      <div class="item-meta">
                        <span class="avatar box-26">
                          <a href="08-profile-page.html"
                            ><img
                              src="assets/img/avatar-8.png"
                              height="52"
                              width="52"
                              alt=""
                              loading="lazy"
                          /></a>
                          <span class="verified"
                            ><svg class="crumina-icon">
                              <use xlink:href="#check-icon"></use></svg
                          ></span>
                        </span>
                        @beardedwndr
                      </div>
                    </div>
                  </div>
                  <div class="featured-item-post-content">
                    <div class="featured-item-pricebox">
                      <div class="price-caption">Current BID</div>
                      <div class="price">1.40 ETH</div>
                    </div>
                    <div class="social-share-box">
                      <div class="social-caption">Share</div>
                      <div class="share-icons">
                        <svg class="crumina-icon">
                          <use xlink:href="#facebook-icon"></use>
                        </svg>
                        <svg class="crumina-icon">
                          <use xlink:href="#twitter-icon"></use>
                        </svg>
                        <svg class="crumina-icon">
                          <use xlink:href="#instagram-icon"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container section-padding">
        <div class="section-title-wrapper">
          <div class="section-title">
            Top <span class="gradient-text">Creators</span>
          </div>
        </div>
        <div class="top-creators-box grid-2-columns">
          <div class="top-creator-item">
            <div class="creator-number">01</div>
            <div class="creator-box">
              <div class="avatar box-64">
                <a href="08-profile-page.html">
                  <picture>
                    <source type="image/avif" srcset="avif/avatar.avif" />
                    <img
                      src="assets/img/avatar.png"
                      alt="avatar"
                      loading="lazy"
                      width="100"
                      height="100"
                    />
                  </picture>
                  <span class="verified"
                    ><svg class="crumina-icon">
                      <use xlink:href="#check-icon"></use></svg></span
                ></a>
              </div>
              <div class="creator-meta">
                <div class="title">
                  <a href="08-profile-page.html">Dexter Stark</a>
                </div>
                <div class="creator-meta">@DexterStark</div>
              </div>
            </div>
            <div class="projects-score">
              <div class="number title">135</div>
              <div class="label">Created</div>
            </div>
            <div class="projects-previews">
              <div class="preview-box box-68">
                <a href="05-product-page.html">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="avif/content/previews/project-thumb-1.avif"
                    />
                    <img
                      src="assets/img/content/previews/project-thumb-1.png"
                      height="68"
                      width="68"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div class="preview-box box-68">
                <a href="06-product-page-v2.html">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="avif/content/previews/project-thumb-2.avif"
                    />
                    <img
                      src="assets/img/content/previews/project-thumb-2.png"
                      height="66"
                      width="66"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div class="preview-box box-68">
                <a href="07-product-page-v3.html">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="avif/content/previews/project-thumb-3.avif"
                    />
                    <img
                      src="assets/img/content/previews/project-thumb-3.png"
                      height="68"
                      width="68"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
          <div class="top-creator-item">
            <div class="creator-number">02</div>
            <div class="creator-box">
              <div class="avatar box-64">
                <a href="08-profile-page.html">
                  <img
                    src="assets/img/avatar-2.png"
                    width="52"
                    height="52"
                    alt="avatar"
                    loading="lazy" /><span class="verified"
                    ><svg class="crumina-icon">
                      <use xlink:href="#check-icon"></use></svg></span
                ></a>
              </div>
              <div class="creator-meta">
                <div class="title">
                  <a href="08-profile-page.html">Jackie Jones</a>
                </div>
                <div class="creator-meta">@JackieJ</div>
              </div>
            </div>
            <div class="projects-score">
              <div class="number title">107</div>
              <div class="label">Created</div>
            </div>
            <div class="projects-previews">
              <div class="preview-box box-68">
                <a href="05-product-page.html">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="avif/content/previews/project-thumb-5.avif"
                    />
                    <img
                      src="assets/img/content/previews/project-thumb-5.png"
                      height="68"
                      width="68"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div class="preview-box box-68">
                <a href="06-product-page-v2.html">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="avif/content/previews/project-thumb-9.avif"
                    />
                    <img
                      src="assets/img/content/previews/project-thumb-9.png"
                      height="74"
                      width="74"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div class="preview-box box-68">
                <a href="07-product-page-v3.html">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="avif/content/previews/project-thumb-10.avif"
                    />
                    <img
                      src="assets/img/content/previews/project-thumb-10.png"
                      height="68"
                      width="68"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
          <div class="top-creator-item">
            <div class="creator-number">03</div>
            <div class="creator-box">
              <div class="avatar box-64">
                <a href="08-profile-page.html">
                  <img
                    src="assets/img/avatar-5.png"
                    height="52"
                    width="52"
                    alt="avatar"
                    loading="lazy" /><span class="verified"
                    ><svg class="crumina-icon">
                      <use xlink:href="#check-icon"></use></svg></span
                ></a>
              </div>
              <div class="creator-meta">
                <div class="title">
                  <a href="08-profile-page.html">Noir Artworks</a>
                </div>
                <div class="creator-meta">@noirArtks</div>
              </div>
            </div>
            <div class="projects-score">
              <div class="number title">94</div>
              <div class="label">Created</div>
            </div>
            <div class="projects-previews">
              <div class="preview-box box-68">
                <a href="05-product-page.html">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="avif/content/previews/project-thumb-4.avif"
                    />
                    <img
                      src="assets/img/content/previews/project-thumb-4.png"
                      height="68"
                      width="68"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div class="preview-box box-68">
                <a href="06-product-page-v2.html">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="avif/content/previews/project-thumb-11.avif"
                    />
                    <img
                      src="assets/img/content/previews/project-thumb-11.png"
                      height="68"
                      width="68"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div class="preview-box box-68">
                <a href="07-product-page-v3.html">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="avif/content/previews/project-thumb-12.avif"
                    />
                    <img
                      src="assets/img/content/previews/project-thumb-12.png"
                      height="68"
                      width="68"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
          <div class="top-creator-item">
            <div class="creator-number">04</div>
            <div class="creator-box">
              <div class="avatar box-64">
                <a href="08-profile-page.html">
                  <img
                    src="assets/img/avatar-3.png"
                    height="52"
                    width="52"
                    alt="avatar"
                    loading="lazy" /><span class="verified"
                    ><svg class="crumina-icon">
                      <use xlink:href="#check-icon"></use></svg></span
                ></a>
              </div>
              <div class="creator-meta">
                <div class="title">
                  <a href="08-profile-page.html">The Green Goo</a>
                </div>
                <div class="creator-meta">@daGreenGoo</div>
              </div>
            </div>
            <div class="projects-score">
              <div class="number title">83</div>
              <div class="label">Created</div>
            </div>
            <div class="projects-previews">
              <div class="preview-box box-68">
                <a href="05-product-page.html"
                  ><img
                    src="assets/img/content/previews/project-thumb-13.png"
                    height="68"
                    width="68"
                    alt=""
                    loading="lazy"
                /></a>
              </div>
              <div class="preview-box box-68">
                <a href="06-product-page-v2.html"
                  ><img
                    src="assets/img/content/previews/project-thumb-14.png"
                    height="68"
                    width="68"
                    alt=""
                    loading="lazy"
                /></a>
              </div>
              <div class="preview-box box-68">
                <a href="07-product-page-v3.html"
                  ><img
                    src="assets/img/content/previews/project-thumb-8.png"
                    height="74"
                    width="74"
                    alt=""
                    loading="lazy"
                /></a>
              </div>
            </div>
          </div>
          <div class="top-creator-item">
            <div class="creator-number">05</div>
            <div class="creator-box">
              <div class="avatar box-64">
                <a href="08-profile-page.html">
                  <img
                    src="assets/img/avatar-10.png"
                    width="52"
                    height="52"
                    alt="avatar"
                    loading="lazy" /><span class="verified"
                    ><svg class="crumina-icon">
                      <use xlink:href="#check-icon"></use></svg></span
                ></a>
              </div>
              <div class="creator-meta">
                <div class="title">
                  <a href="08-profile-page.html">Nicholas Stevens</a>
                </div>
                <div class="creator-meta">@nickstevens</div>
              </div>
            </div>
            <div class="projects-score">
              <div class="number title">50</div>
              <div class="label">Created</div>
            </div>
            <div class="projects-previews">
              <div class="preview-box box-68">
                <a href="05-product-page.html"
                  ><img
                    src="assets/img/content/previews/project-thumb-15.png"
                    height="68"
                    width="68"
                    alt=""
                    loading="lazy"
                /></a>
              </div>
              <div class="preview-box box-68">
                <a href="06-product-page-v2.html"
                  ><img
                    src="assets/img/content/previews/project-thumb-16.png"
                    height="68"
                    width="68"
                    alt=""
                    loading="lazy"
                /></a>
              </div>
              <div class="preview-box box-68">
                <a href="07-product-page-v3.html"
                  ><img
                    src="assets/img/content/previews/project-thumb-17.png"
                    height="68"
                    width="68"
                    alt=""
                    loading="lazy"
                /></a>
              </div>
            </div>
          </div>
          <div class="top-creator-item">
            <div class="creator-number">06</div>
            <div class="creator-box">
              <div class="avatar box-64">
                <a href="08-profile-page.html">
                  <img
                    src="assets/img/avatar-8.png"
                    height="52"
                    width="52"
                    alt="avatar"
                    loading="lazy" /><span class="verified"
                    ><svg class="crumina-icon">
                      <use xlink:href="#check-icon"></use></svg></span
                ></a>
              </div>
              <div class="creator-meta">
                <div class="title">
                  <a href="08-profile-page.html">Bearded Wonder</a>
                </div>
                <div class="creator-meta">@beardedwndr</div>
              </div>
            </div>
            <div class="projects-score">
              <div class="number title">26</div>
              <div class="label">Created</div>
            </div>
            <div class="projects-previews">
              <div class="preview-box box-68">
                <a href="05-product-page.html"
                  ><img
                    src="assets/img/content/previews/project-thumb-18.png"
                    height="68"
                    width="68"
                    alt=""
                    loading="lazy"
                /></a>
              </div>
              <div class="preview-box box-68">
                <a href="06-product-page-v2.html"
                  ><img
                    src="assets/img/content/previews/project-thumb-19.png"
                    height="68"
                    width="68"
                    alt=""
                    loading="lazy"
                /></a>
              </div>
              <div class="preview-box box-68">
                <a href="07-product-page-v3.html"
                  ><img
                    src="assets/img/content/previews/project-thumb-20.png"
                    height="68"
                    width="68"
                    alt=""
                    loading="lazy"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container section-padding">
        <div class="section-title-wrapper">
          <div class="section-title">
            <span class="gradient-text">Newest</span> Items
          </div>
          <div class="all-items-link">
            <a href="02-explore.html">Explore all Artworks</a>
          </div>
        </div>
        <div class="featured-box">
          <div class="featured-box-wrapper grid-4-columns">
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">22</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="06-product-page-v2.html">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="avif/content/items/featured-item-5.avif"
                        />
                        <img
                          src="assets/img/content/items/featured-item-5.png"
                          width="304"
                          height="340"
                          loading="lazy"
                          alt="Featured"
                        />
                      </picture>
                    </a>
                  </div>
                  <div class="featured-item-info">
                    <div class="title">
                      <a href="06-product-page-v2.html">MushRoom Popcorn</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html">
                          <picture>
                            <source
                              type="image/avif"
                              srcset="avif/avatar.avif"
                            />
                            <img
                              src="assets/img/avatar.png"
                              alt="avatar"
                              loading="lazy"
                              width="100"
                              height="100"
                            />
                          </picture>
                        </a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @DexterStark
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Reserve price</div>
                    <div class="price">0.96 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">45</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="07-product-page-v3.html">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="avif/content/items/featured-item-6.avif"
                        />
                        <img
                          src="assets/img/content/items/featured-item-6.png"
                          width="304"
                          height="340"
                          loading="lazy"
                          alt="Featured"
                        />
                      </picture>
                    </a>
                  </div>
                  <div class="featured-item-info">
                    <div class="title">
                      <a href="07-product-page-v3.html">Golden Expansion</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html">
                          <picture>
                            <source
                              type="image/avif"
                              srcset="avif/avatar.avif"
                            />
                            <img
                              src="assets/img/avatar.png"
                              alt="avatar"
                              loading="lazy"
                              width="100"
                              height="100"
                            />
                          </picture>
                        </a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @DexterStark
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Reserve price</div>
                    <div class="price">1.47 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">36</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="05-product-page.html"
                      ><img
                        src="assets/img/content/items/featured-item-7.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="featured-countdown">
                      <span class="clock"
                        ><svg class="crumina-icon">
                          <use xlink:href="#clock-icon"></use></svg></span
                      ><span
                        class="js-countdown"
                        data-timer="16400"
                        data-labels="d : , h : , m : , s"
                      ></span>
                    </div>
                    <div class="title">
                      <a href="05-product-page.html">Soul Picz Block</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html">
                          <img
                            src="assets/img/avatar-2.png"
                            height="52"
                            width="52"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @JackieJ
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Current BID</div>
                    <div class="price">3.25 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">98</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="06-product-page-v2.html"
                      ><img
                        src="assets/img/content/items/featured-item-8.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="title">
                      <a href="06-product-page-v2.html">Jellyfish Galaxy</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html">
                          <img
                            src="assets/img/avatar-8.png"
                            height="52"
                            width="52"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @beardedwndr
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Reserve price</div>
                    <div class="price">0.57 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">24</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="07-product-page-v3.html"
                      ><img
                        src="assets/img/content/items/featured-item-9.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="title">
                      <a href="07-product-page-v3.html">Bubblegum Dream</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html">
                          <img
                            src="assets/img/avatar-3.png"
                            height="52"
                            width="52"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @daGreenGoo
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Reserve price</div>
                    <div class="price">1.36 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">32</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="05-product-page.html"
                      ><img
                        src="assets/img/content/items/featured-item-10.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="featured-countdown">
                      <span class="clock"
                        ><svg class="crumina-icon">
                          <use xlink:href="#clock-icon"></use></svg></span
                      ><span
                        class="js-countdown"
                        data-timer="86400"
                        data-labels="d : , h : , m : , s"
                      ></span>
                    </div>
                    <div class="title">
                      <a href="05-product-page.html">Lost in Illustration</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html">
                          <img
                            src="assets/img/avatar-5.png"
                            height="52"
                            width="52"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @noirArtks
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Current BID</div>
                    <div class="price">4.89 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">39</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="06-product-page-v2.html"
                      ><img
                        src="assets/img/content/items/featured-item-11.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="title">
                      <a href="06-product-page-v2.html">Canary’s Kitchen</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html"
                          ><img
                            src="assets/img/avatar-3.png"
                            height="52"
                            width="52"
                            alt=""
                            loading="lazy"
                        /></a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @daGreenGoo
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Reserve price</div>
                    <div class="price">3.47 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">47</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="07-product-page-v3.html"
                      ><img
                        src="assets/img/content/items/featured-item-12.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="title">
                      <a href="07-product-page-v3.html">Octo-Oceanic</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html">
                          <img
                            src="assets/img/avatar-5.png"
                            height="52"
                            width="52"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @noirArtks
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Reserve price</div>
                    <div class="price">0.25 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">14</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="05-product-page.html"
                      ><img
                        src="assets/img/content/items/featured-item-13.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="featured-countdown">
                      <span class="clock"
                        ><svg class="crumina-icon">
                          <use xlink:href="#clock-icon"></use></svg></span
                      ><span
                        class="js-countdown"
                        data-timer="86400"
                        data-labels="d : , h : , m : , s"
                      ></span>
                    </div>
                    <div class="title">
                      <a href="05-product-page.html">Vengeful Stare</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html">
                          <img
                            src="assets/img/avatar-5.png"
                            alt=""
                            height="52"
                            width="52"
                            loading="lazy"
                          />
                        </a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @noirArtks
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Reserve price</div>
                    <div class="price">4.07 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">41</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="06-product-page-v2.html"
                      ><img
                        src="assets/img/content/items/featured-item-14.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="title">
                      <a href="06-product-page-v2.html">Neon Stringers</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html"
                          ><img
                            src="assets/img/avatar-10.png"
                            height="52"
                            width="52"
                            alt=""
                            loading="lazy"
                        /></a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @nickstevens
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Reserve price</div>
                    <div class="price">1.96 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">16</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="07-product-page-v3.html"
                      ><img
                        src="assets/img/content/items/featured-item-15.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="featured-countdown">
                      <span class="clock"
                        ><svg class="crumina-icon">
                          <use xlink:href="#clock-icon"></use></svg></span
                      ><span
                        class="js-countdown"
                        data-timer="86400"
                        data-labels="d : , h : , m : , s"
                      ></span>
                    </div>
                    <div class="title">
                      <a href="07-product-page-v3.html">Quartz Fantasy</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html"
                          ><img
                            src="assets/img/avatar-10.png"
                            height="52"
                            width="52"
                            alt=""
                            loading="lazy"
                        /></a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @nickstevens
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Current BID</div>
                    <div class="price">2.31 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-item-wrapper">
                <div class="featured-item-content">
                  <div class="fav-counter">
                    <svg class="crumina-icon">
                      <use xlink:href="#heart-icon"></use></svg
                    ><span class="count">38</span>
                  </div>
                  <div class="featured-item-image">
                    <a href="05-product-page.html"
                      ><img
                        src="assets/img/content/items/featured-item-16.png"
                        width="304"
                        height="340"
                        alt=""
                        loading="lazy"
                    /></a>
                  </div>
                  <div class="featured-item-info">
                    <div class="title">
                      <a href="05-product-page.html">Crimson Planks</a>
                    </div>
                    <div class="item-meta">
                      <span class="avatar box-26">
                        <a href="08-profile-page.html"
                          ><img
                            src="assets/img/avatar-3.png"
                            height="52"
                            width="52"
                            alt=""
                            loading="lazy"
                        /></a>
                        <span class="verified"
                          ><svg class="crumina-icon">
                            <use xlink:href="#check-icon"></use></svg
                        ></span>
                      </span>
                      @daGreenGoo
                    </div>
                  </div>
                </div>
                <div class="featured-item-post-content">
                  <div class="featured-item-pricebox">
                    <div class="price-caption">Reserve price</div>
                    <div class="price">1.36 ETH</div>
                  </div>
                  <div class="social-share-box">
                    <div class="social-caption">Share</div>
                    <div class="share-icons">
                      <svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg>
                      <svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="more-section flex-center">
            <a class="btn btn-normal btn-dark" href="03-explore-v2.html"
              >View All Artworks</a
            >
          </div>
        </div>
      </div>
      <div class="container section-padding">
        <div class="section-title-wrapper">
          <div class="section-title">
            <span class="gradient-text">Featured</span> Creators
          </div>
          <div class="all-items-link">
            <a href="10-creators.html">Explore all Creators</a>
          </div>
        </div>
        <div class="featured-creators-box grid-2-columns">
          <div class="featured-creators-item">
            <img
              src="assets/img/content/subtle-images/subtle-image-1.png"
              width="470"
              height="640"
              alt=""
              loading="lazy"
            />
            <div class="featured-creators-wrapper">
              <div class="featured-creators-info-wrapper">
                <div class="featured-creators-info">
                  <div class="title h4">
                    <a href="08-profile-page.html">Dexter Stark</a>
                  </div>
                  <div class="item-meta">
                    <span class="avatar box-26">
                      <a href="08-profile-page.html"
                        ><img
                          src="assets/img/avatar.png"
                          height="100"
                          width="100"
                          alt=""
                          loading="lazy"
                      /></a>
                      <span class="verified"
                        ><svg class="crumina-icon">
                          <use xlink:href="#check-icon"></use></svg
                      ></span>
                    </span>
                    @DexterStark
                  </div>
                </div>
                <div class="follow-me gradient-border_white-bg">
                  <button class="btn btn-normal">Follow!</button>
                </div>
              </div>
              <ul class="social-icons-list">
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#link-icon"></use></svg
                  ></a>
                </li>
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#facebook-icon"></use></svg
                  ></a>
                </li>
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#twitter-icon"></use></svg
                  ></a>
                </li>
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#instagram-icon"></use></svg
                  ></a>
                </li>
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#twitch-icon"></use></svg
                  ></a>
                </li>
              </ul>
              <div class="about-creator">
                <p>
                  I’m a graphic designer and illustrator from Mexico City. Since
                  2 years ago I specialize on big mural pieces and street art
                  that you can find in countries all around the world!
                </p>
              </div>
              <div class="creator-stats">
                <div class="stats-item">
                  <div class="number title">12.3K</div>
                  <div class="label">Followers</div>
                </div>
                <div class="stats-item">
                  <div class="number title">7.2K</div>
                  <div class="label">Following</div>
                </div>
                <div class="stats-item">
                  <div class="number title">135</div>
                  <div class="label">Created</div>
                </div>
                <div class="stats-item">
                  <div class="number title">9</div>
                  <div class="label">On Sale</div>
                </div>
              </div>
              <div class="projects-previews">
                <div class="preview-box">
                  <a href="05-product-page.html">
                    <img
                      src="assets/img/content/previews/project-thumb-1.png"
                      width="68"
                      height="68"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="preview-box">
                  <a href="06-product-page-v2.html"
                    ><img
                      src="assets/img/content/previews/project-thumb-2.png"
                      height="66"
                      width="66"
                      alt=""
                      loading="lazy"
                  /></a>
                </div>
                <div class="preview-box">
                  <a href="07-product-page-v3.html"
                    ><img
                      src="assets/img/content/previews/project-thumb-3.png"
                      width="68"
                      height="68"
                      alt=""
                      loading="lazy"
                  /></a>
                </div>
                <div class="preview-box">
                  <a href="05-product-page.html"
                    ><img
                      src="assets/img/content/previews/project-thumb-21.png"
                      height="50"
                      width="50"
                      alt=""
                      loading="lazy"
                  /></a>
                </div>
                <div class="preview-box more-projects">
                  <a href="08-profile-page.html"
                    ><svg class="crumina-icon">
                      <use xlink:href="#dots-icon"></use></svg
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="featured-creators-item">
            <img
              src="assets/img/content/subtle-images/subtle-image-2.png"
              width="470"
              height="640"
              alt=""
              loading="lazy"
            />
            <div class="featured-creators-wrapper">
              <div class="featured-creators-info-wrapper">
                <div class="featured-creators-info">
                  <div class="title h4">
                    <a href="08-profile-page.html">Noir Artworks</a>
                  </div>
                  <div class="item-meta">
                    <span class="avatar box-26">
                      <a href="08-profile-page.html"
                        ><img
                          src="assets/img/avatar-5.png"
                          height="52"
                          width="52"
                          alt=""
                          loading="lazy"
                      /></a>
                      <span class="verified">
                        <svg class="crumina-icon">
                          <use
                            xlink:href="#check-icon"
                          ></use></svg></span></span
                    >@noirArtks
                  </div>
                </div>
                <div class="follow-me gradient-border_white-bg">
                  <button class="btn btn-normal">Follow!</button>
                </div>
              </div>
              <ul class="social-icons-list">
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#twitter-icon"></use></svg
                  ></a>
                </li>
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#instagram-icon"></use></svg
                  ></a>
                </li>
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#twitch-icon"></use></svg
                  ></a>
                </li>
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#pinterest-icon"></use></svg
                  ></a>
                </li>
                <li class="social-icon icon-border">
                  <a href="#"
                    ><svg class="crumina-icon">
                      <use xlink:href="#reddit-icon"></use></svg
                  ></a>
                </li>
              </ul>
              <div class="about-creator">
                <p>
                  I am a self-taught digital artist who specializes in 3d art
                  and motion graphics. Most of my works are inspired by nature
                  and bio-mechanic themes, but I also create the occasional
                  character.
                </p>
              </div>
              <div class="creator-stats">
                <div class="stats-item">
                  <div class="number title">8.3K</div>
                  <div class="label">Followers</div>
                </div>
                <div class="stats-item">
                  <div class="number title">5.6K</div>
                  <div class="label">Following</div>
                </div>
                <div class="stats-item">
                  <div class="number title">54</div>
                  <div class="label">Created</div>
                </div>
                <div class="stats-item">
                  <div class="number title">5</div>
                  <div class="label">On Sale</div>
                </div>
              </div>
              <div class="projects-previews">
                <div class="preview-box">
                  <a href="05-product-page.html"
                    ><img
                      src="assets/img/content/previews/project-thumb-4.png"
                      width="68"
                      height="68"
                      alt=""
                      loading="lazy"
                  /></a>
                </div>
                <div class="preview-box">
                  <a href="06-product-page-v2.html"
                    ><img
                      src="assets/img/content/previews/project-thumb-11.png"
                      height="68"
                      width="68"
                      alt=""
                      loading="lazy"
                  /></a>
                </div>
                <div class="preview-box">
                  <a href="07-product-page-v3.html"
                    ><img
                      src="assets/img/content/previews/project-thumb-12.png"
                      width="68"
                      height="68"
                      alt=""
                      loading="lazy"
                  /></a>
                </div>
                <div class="preview-box">
                  <a href="05-product-page.html"
                    ><img
                      src="assets/img/content/previews/project-thumb-22.png"
                      height="50"
                      width="50"
                      alt=""
                      loading="lazy"
                  /></a>
                </div>
                <div class="preview-box more-projects">
                  <a href="08-profile-page.html"
                    ><svg class="crumina-icon">
                      <use xlink:href="#dots-icon"></use></svg
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="call-to-action-box">
          <div class="animated-img"></div>
          <div class="call-to-action-text">
            <div class="subtitle">COME AND JOIN THEM!</div>
            <div class="h2">Become a Creator!</div>
          </div>
          <div class="subscribe-form">
            <a href="24-become-a-creator.html" class="btn btn-normal btn-dark"
              >Start Selling!</a
            >
          </div>
        </div>
      </div>
      <div class="container section-padding">
        <div class="section-title-wrapper">
          <div class="section-title">
            Latest <span class="gradient-text">News</span>
          </div>
          <div class="all-items-link">
            <a href="12-blog-grid.html">View all Blog Posts</a>
          </div>
        </div>
        <div class="latest-news-box grid-3-columns">
          <div class="news-item">
            <div class="news-thumb">
              <a href="14-blog-post-centered.html">
                <img
                  src="assets/img/content/latest-news/news-thumb1.png"
                  width="460"
                  height="260"
                  alt=""
                  loading="lazy"
              /></a>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <div class="news-tags">
                  <span class="tag-item"><a>Guides</a></span>
                </div>
                by <a href="08-profile-page.html">Cryptoki</a>, March 26th, 2021
              </div>
              <div class="news-title h5">
                <a href="15-blog-post-sidebar.html"
                  >We explain with details everything you need to know about
                  crypto art and cryptocurrencies!</a
                >
              </div>
              <div class="news-excerpt">
                A cryptocurrency is a digital asset designed to work as a medium
                of exchange wherein individual coin ownership records...
              </div>
              <div class="read-more-link">
                <a href="14-blog-post-centered.html"
                  >Read More<svg class="crumina-icon">
                    <use xlink:href="#arrow-right2-icon"></use></svg
                ></a>
              </div>
            </div>
          </div>
          <div class="news-item">
            <div class="news-thumb">
              <a href="14-blog-post-centered.html">
                <img
                  src="assets/img/content/latest-news/news-thumb2.png"
                  height="260"
                  width="460"
                  alt=""
                  loading="lazy"
              /></a>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <div class="news-tags">
                  <span class="tag-item"><a>Guides</a></span>
                  <span class="tag-item"><a>News</a></span>
                </div>
                by <a href="08-profile-page.html">Marina Valentine</a>, March
                13th, 2021
              </div>
              <div class="news-title h5">
                <a href="15-blog-post-sidebar.html"
                  >Here’s a quick guide about how to make money selling your
                  artworks with Criptoki!</a
                >
              </div>
              <div class="news-excerpt">
                A cryptocurrency is a digital asset designed to work as a medium
                of exchange wherein individual coin ownership records...
              </div>
              <div class="read-more-link">
                <a href="15-blog-post-sidebar.html"
                  >Read More<svg class="crumina-icon">
                    <use xlink:href="#arrow-right2-icon"></use></svg
                ></a>
              </div>
            </div>
          </div>
          <div class="news-item">
            <div class="news-thumb">
              <a href="15-blog-post-sidebar.html">
                <img
                  src="assets/img/content/latest-news/news-thumb3.png"
                  width="460"
                  height="260"
                  alt=""
                  loading="lazy"
              /></a>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <div class="news-tags">
                  <span class="tag-item"><a>Currencies</a></span>
                </div>
                by <a href="08-profile-page.html">Cryptoki</a>, March 4th, 2021
              </div>
              <div class="news-title h5">
                <a href="15-blog-post-sidebar.html"
                  >What’s ETH? An in-depth view of the currency used in the
                  market</a
                >
              </div>
              <div class="news-excerpt">
                A cryptocurrency is a digital asset designed to work as a medium
                of exchange wherein individual coin ownership records...
              </div>
              <div class="read-more-link">
                <a href="15-blog-post-sidebar.html"
                  >Read More<svg class="crumina-icon">
                    <use xlink:href="#arrow-right2-icon"></use></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MAIN CONTENT AREA -->
    <!-- BEFORE FOOTER BLOCK -->
    <footerBlock></footerBlock>

    <!-- BEFORE FOOTER BLOCK -->
    <!-- FOOTER -->
    <footerVue></footerVue>

    <!-- FOOTER -->
  </div>
</template>

<script>
import headerPanel from "@/pages/header.vue";
import footerVue from "@/pages/footer.vue";
import navigationVue from "@/pages/navigation.vue";
import footerBlock from "@/pages/footerblock.vue";
import GameService from "@/service/GameService";

import categoriesBarVue from "@/pages/categoriesBar.vue";
export default {
  name: "homeEZD",
  components: {
    headerPanel,
    footerVue,
    navigationVue,
    footerBlock,
    categoriesBarVue,
  },
  data() {
    return {
      gamelist: [],
    };
  },
  methods: {
    async getAllGames() {
      try {
        const response = await GameService.getAllGames();
        this.gamelist = response.data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách trò chơi: ", error);
      }
    },
  },
  async created() {
   
    await this.getAllGames();

    // await this.getAllLevels();
    // await this.getAllRoles();
    // await this.getAllGenders();
  },
  computed: {
    // Tính toán `maxId` để xác định `id` lớn nhất trong danh sách
    maxId() {
      return Math.max(...this.gamelist.map((game) => game.id));
    },
  },
};
</script>


