<template>
    <header class="site-header">
        <div class="topbar padding-top-bottom border-bottom">
          <div class="topbar-wrapper container">
            <!--MOBILE NAVIGATION-->
            <div class="mobile-nav-panel">
              <div class="mobile-nav-header">
                <!--MOBILE LOGO-->
                <div class="mobile-menu-logo logo"><a href="01-index.html"><img  :src="BASE_URL + 'assets/svg/cryptoki-logo.svg'" alt="" ></a>
                </div>
                <!--/MOBILE LOGO-->
                <!--close button-->
                  <div class="close-icon">
                      <svg class="crumina-icon">
                          <use xlink:href="#cross-icon"></use>
                      </svg>
                  </div>
                <!--/close button-->
              </div>
              <!--MOBILE MENU-->
              <div class="mobile-menu-wrapper">
                <ul class="mobile-menu">
                  <li class="menu-item"><a class="menu-link" href="01-index.html">Home</a></li>
                  <li class="menu-item menu-item-has-children"><a class="menu-link" href="#">Explore
                      <span class="indicator"><svg class="crumina-icon">
                          <use xlink:href="#arrow-down-icon"></use>
                        </svg></span>
                    </a>
                    <ul class="submenu">
                      <li class="menu-item"><a class="menu-link" href="02-explore.html">Explore</a>
                      </li>
                      <li class="menu-item"><a class="menu-link" href="03-explore-v2.html">Explore v2</a>
                      </li>
                      <li class="menu-item"><a class="menu-link" href="04-item-versions.html">Item versions</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item"><a class="menu-link" href="10-creators.html">Creators</a></li>
                  <li class="menu-item"><a class="menu-link" href="11-collectors.html">Collectors</a></li>
                  <li class="menu-item"><a class="menu-link" href="16-spotlight.html">Spotlight</a></li>
                  <li class="menu-item menu-item-has-children"><a class="menu-link" href="#">Product<span
                        class="indicator"><svg class="crumina-icon">
                          <use xlink:href="#arrow-down-icon"></use>
                        </svg></span></a>
                    <ul class="submenu">
                      <li class="menu-item"><a class="menu-link" href="05-product-page.html">Product v1</a>
                      </li>
                      <li class="menu-item"><a class="menu-link" href="06-product-page-v2.html">Product v2</a>
                      </li>
                      <li class="menu-item"><a class="menu-link" href="07-product-page-v3.html">Product v3</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-has-megamenu menu-item-has-children"><a class="menu-link" href="#">All
                      pages<span class="indicator"><svg class="crumina-icon">
                          <use xlink:href="#arrow-down-icon"></use>
                        </svg></span><span class="highlighted-item gradient-background">NEW</span></a>
                    <div class="megamenu">
                      <div class="megamenu-wrapper">
                        <div class="megamenu-column">
                          <div class="megamenu-title">Main Pages</div>
                          <div>
                            <ul class="submenu-column">
                              <li class="menu-item"><a href="01-index.html" class="menu-link">Home</a></li>
                              <li class="menu-item"><a href="02-explore.html" class="menu-link">Explore</a></li>
                              <li class="menu-item"><a href="03-explore-v2.html" class="menu-link">Explore v2</a></li>
                              <li class="menu-item"><a href="04-item-versions.html" class="menu-link">Item versions</a>
                              </li>
                              <li class="menu-item"><a href="16-spotlight.html" class="menu-link">Spotlight</a></li>
                              <li class="menu-item"><a href="05-product-page.html" class="menu-link">Product page</a></li>
                              <li class="menu-item"><a href="06-product-page-v2.html" class="menu-link">Product page
                                  v2</a></li>
                            </ul>
                            <ul class="submenu-column">
                              <li class="menu-item"><a href="07-product-page-v3.html" class="menu-link">Product page
                                  v3</a></li>
                              <li class="menu-item"><a href="12-blog-grid.html" class="menu-link">Blog grid</a></li>
                              <li class="menu-item"><a href="13-blog-classic.html" class="menu-link">Blog classic</a></li>
                              <li class="menu-item"><a href="14-blog-post-centered.html" class="menu-link">Blog
                                  postcentered</a></li>
                              <li class="menu-item"><a href="15-blog-post-sidebar.html" class="menu-link">Blog post
                                  sidebar</a></li>
                              <li class="menu-item"><a href="19-faq.html" class="menu-link">FAQ</a></li>
                              <li class="menu-item"><a href="20-contact.html" class="menu-link">Contact</a></li>
  
                            </ul>
                          </div>
                        </div>
                        <div class="megamenu-column">
                          <div class="megamenu-title">User pages</div>
                          <div>
                            <ul class="submenu-column">
                              <li class="menu-item"><a href="08-profile-page.html" class="menu-link">Profile page</a></li>
                              <li class="menu-item"><a href="09-profile-page-about.html" class="menu-link">Profile page
                                  about</a></li>
                              <li class="menu-item"><a href="23-profile-info.html" class="menu-link">Profile info</a></li>
                              <li class="menu-item"><a href="26-upload-artwork.html" class="menu-link">Upload artwork</a>
                              </li>
                              <li class="menu-item"><a href="25-notifications.html" class="menu-link">Notifications</a>
                              </li>
                              <li class="menu-item"><a href="27-shopping-cart.html" class="menu-link">Shopping cart</a>
                              </li>
                              <li class="menu-item"><a href="28-checkout.html" class="menu-link">Checkout</a></li>
                            </ul>
                            <ul class="submenu-column">
                              <li class="menu-item"><a href="17-activity.html" class="menu-link">Activity</a></li>
                              <li class="menu-item"><a href="10-creators.html" class="menu-link">Creators</a></li>
                              <li class="menu-item"><a href="11-collectors.html" class="menu-link">Collectors</a></li>
                              <li class="menu-item"><a href="24-become-a-creator.html" class="menu-link">Become a
                                  creator</a></li>
                              <li class="menu-item"><a href="18-connect-a-wallet.html" class="menu-link">Connect a
                                  wallet</a></li>
                              <li class="menu-item"><a href="21-login.html" class="menu-link">Login</a></li>
                              <li class="menu-item"><a href="22-register.html" class="menu-link">Register</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item menu-item-has-children"><a class="menu-link" href="#">Blog<span
                        class="indicator"><svg class="crumina-icon">
                          <use xlink:href="#arrow-down-icon"></use>
                        </svg></span></a>
                    <ul class="submenu">
                      <li class="menu-item"><a class="menu-link" href="12-blog-grid.html">Blog grid</a>
                      </li>
                      <li class="menu-item"><a class="menu-link" href="13-blog-classic.html">Blog classic</a>
                      </li>
                      <li class="menu-item"><a class="menu-link" href="14-blog-post-centered.html">Blog post centered</a>
                      </li>
                      <li class="menu-item"><a class="menu-link" href="15-blog-post-sidebar.html">Blog post sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item"><a class="menu-link" href="08-profile-page.html">My Collection<span class="count">
                        12</span></a></li>
                </ul>
              </div>
              <!--mobile menu bottom panel-->
              <div class="mobile-nav-footer">
                <ul class="social-icons-list">
                  <li class="social-icon"><a href="#"><svg class="crumina-icon">
                        <use xlink:href="#facebook-icon"></use>
                      </svg></a></li>
                  <li class="social-icon"><a href="#"><svg class="crumina-icon">
                        <use xlink:href="#twitter-icon"></use>
                      </svg></a></li>
                  <li class="social-icon"><a href="#"><svg class="crumina-icon">
                        <use xlink:href="#instagram-icon"></use>
                      </svg></a></li>
                  <li class="social-icon"><a href="#"><svg class="crumina-icon">
                        <use xlink:href="#twitch-icon"></use>
                      </svg></a></li>
                  <li class="social-icon"><a href="#"><svg class="crumina-icon">
                        <use xlink:href="#discord-icon"></use>
                      </svg></a></li>
                </ul>
              </div>
              <!--/mobbile menu bottom panel-->
            </div>
            <!--/MOBILE NAVIGATION-->
            <!--MOBILE NAVIGATION BUTTON-->
            <div class="burger-icon">
              <svg class="crumina-icon">
                <use xlink:href="#menu-icon"></use>
              </svg>
            </div>
            <!--/MOBILE NAVIGATION BUTTON-->
            <!--LOGO-->
            <div class="logo ">
              <a class="logo-link" href="01-index.html">
                <div class="logo-img"><img  :src="BASE_URL + 'assets/svg/cryptoki-logo.svg'" alt="logo" ></div>
                <div class="logo-text">Cryptoki</div>
              </a>
            </div>
            <!--/LOGO-->
            <!--TOP SERCH BOX-->
            <div class="searchbox">
              <form method="get" class="main-search">
                <input class="main-search-params" type="hidden" name="params" value="all" />
                <button class="search-params">
                  <span class="search-param-title">All items</span>
                  <svg class="crumina-icon">
                    <use xlink:href="#arrow-down-icon"></use>
                  </svg>
                </button>
                <ul class="search-dropdown">
                  <li data-param="all">All items</li>
                  <li data-param="auctions">Auctions</li>
                  <li data-param="collections">Collections</li>
                  <li data-param="creators">Creators</li>
                </ul>
                <input type="text" class="search-input" name="head-search" id="head-search"
                  placeholder="Enter your search here...">
                <button class="search-button">
                  <svg class="crumina-icon">
                    <use xlink:href="#search-icon"></use>
                  </svg>
                </button>
              </form>
            </div>
            <!--/TOP SERCH BOX-->
            <!--OPEN SEARCH ON  MOBILE-->
            <button id="mobile-search">
              <svg class="crumina-icon open-button">
                <use id="search" xlink:href="#search-icon"></use>
              </svg>
            </button>
            <!--/OPEN SEARCH ON  MOBILE-->
            <!--HEADER BUTTON-->
            <div class="collection-box">
              <a class="btn btn-normal btn-dark create-collection" href="26-upload-artwork.html">Create</a>
              <div class="collection-title"><a href="08-profile-page.html">My Collection<span
                    class="count colored">12</span></a></div>
            </div>
            <!--/HEADER BUTTON-->
            <!--HEADER ICONS-->
            <div class="user-activity-buttons">
              <!--CART BUTTON-->
              <div class="cart-button-cont">
                <button class="cart-button cryptoki-notif-bttn" data-target="cart-dropdown">
                  <span class="counter">3</span>
                  <svg class="crumina-icon">
                    <use xlink:href="#bag-icon"></use>
                  </svg>
                  <!--cart dropdown-->
                </button>
                <div id="cart-dropdown" class="cryptoki-notif-target">
                  <div class="title">
                    Your Cart <span class="colored">3</span>
                  </div>
                  <div class="cart-wrapper">
                    <!--cart product-->
                    <div class="cart-product">
                      <div class="thumb-box">
                        <a href="05-product-page.html"><img  :src="BASE_URL + 'assets/img/content/notifications/notif-thumb-1.png'" width="50" height="50" alt="UI templates" loading="lazy"></a>
                      </div>
                      <div class="purchase-info">
                        <div class="product-info">
                          <div class="product-title"><a href="05-product-page.html">Cryptoki NFT and Digital Market PSD
                              Template</a></div>
                          <div class="product-price">$12.00</div>
                        </div>
                        <div class="product-type ui-templates">UI templates</div>
                      </div>
                    </div>
                    <!--/cart product-->
                    <!--cart product-->
                    <div class="cart-product">
                      <div class="thumb-box">
                        <a href="06-product-page-v2.html"><img  :src="BASE_URL + 'assets/img/content/notifications/notif-thumb-2.png'" width="50" height="50" alt="Social graphics" loading="lazy"></a>
                      </div>
                      <div class="purchase-info">
                        <div class="product-info">
                          <div class="product-title"><a href="06-product-page-v2.html">Twitter Gaming Headers Pack 04</a>
                          </div>
                          <div class="product-price">$40.00</div>
                        </div>
                        <div class="product-type social-graphics">Social graphics</div>
                      </div>
                    </div>
                    <!--/cart product-->
                    <!--cart product-->
                    <div class="cart-product">
                      <div class="thumb-box">
                        <a href="07-product-page-v3.html"><img  :src="BASE_URL + 'assets/img/content/notifications/notif-thumb-3.png'" width="50" height="50" alt="Coded templates" loading="lazy"></a>
                      </div>
                      <div class="purchase-info">
                        <div class="product-info">
                          <div class="product-title"><a href="07-product-page-v3.html">Olympus WP - Social Networking
                              Theme</a></div>
                          <div class="product-price">$68.00</div>
                        </div>
                        <div class="product-type coded-templates">Coded templates</div>
                      </div>
                    </div>
                  </div>
                  <!--/cart product-->
  
                  <div class="total-price">
                    <div class="heading">Cart Total</div>
                    <div class="price">$120.00</div>
                  </div>
                  <div class="cart-buttons">
                    <a href="27-shopping-cart.html" class="btn-small gradient-background btn-square">Go to Cart</a>
                    <a href="28-checkout.html" class="btn-small btn-dark btn-square">Checkout</a>
                  </div>
                </div>
              </div>
              <!--/cart dropdown-->
              <!--/CART BUTTON-->
              <!--NOTIFICATION BUTTON-->
              <div class="favourites-button-cont"><button class="favourites-button cryptoki-notif-bttn" data-target="">
                  <svg class="crumina-icon">
                    <use xlink:href="#heart-icon"></use>
                  </svg>
                </button></div>
              <div class="notifications-button-cont">
                <button class="notifications-button cryptoki-notif-bttn" data-target="notifications-dropdown">
                  <!--notifications icon-->
                  <span class="counter">10</span>
                  <svg class="crumina-icon">
                    <use xlink:href="#bell-icon"></use>
                  </svg>
                  <!--/notifications icon-->
                </button>
                <!--notification dropdown-->
                <div id="notifications-dropdown" class="cryptoki-notif-target">
                  <div class="title"> Notifications <span class="colored">10</span></div>
                  <div class="notifications-wrapper cryptoki-scrollbar">
                    <!--notification-item-->
                    <div class="notification">
                      <div class="thumb-box">
                        <img  :src="BASE_URL + 'assets/img/content/notifications/notif-thumb-1.png'" width="50" height="50" alt="" loading="lazy">
                        <span class="bid-type"><svg class="crumina-icon">
                            <use xlink:href="#annotation-icon"></use>
                          </svg></span>
                      </div>
                      <div class="notification-info">
                        <div class="message">
                          <a href="08-profile-page.html" class="bold">@JackieJ</a> just commented on <a
                            href="05-product-page.html" class="bold">Cryptoki NFT
                            and Digital Market PSD Template</a>
                        </div>
                        <div class="publish-date">2 minutes ago</div>
                      </div>
                    </div>
                    <!--/notification-item-->
                    <!--notification-item-->
                    <div class="notification">
                      <div class="thumb-box"><img  :src="BASE_URL + 'assets/img/content/notifications/notif-thumb-1.png'" height="50" width="50" alt="" loading="lazy">
                        <span class="purchase-type">
                          <svg class="crumina-icon">
                            <use xlink:href="#wallet-icon"></use>
                          </svg>
                        </span>
                      </div>
                      <div class="notification-info">
                        <div class="message">
                          <a href="08-profile-page.html" class="bold">@CrimsonRay</a> just purchased<a
                            href="06-product-page-v2.html" class="bold"> Cryptoki NFT
                            and Digital Market PSD Template</a>
                        </div>
                        <div class="publish-date">10 minutes ago</div>
                      </div>
                    </div>
                    <!--/notification-item-->
                    <!--notification-item-->
                    <div class="notification">
                      <div class="thumb-box">
                        <img  :src="BASE_URL + 'assets/img/content/notifications/notif-thumb-2.png'" width="50" height="50" alt="" loading="lazy">
                        <span class="like-type"><svg class="crumina-icon">
                            <use xlink:href="#heart-icon"></use>
                          </svg></span>
                      </div>
                      <div class="notification-info">
                        <div class="message">
                          <a href="08-profile-page.html" class="bold">@NoirArtks</a> just liked<a
                            href="07-product-page-v3.html" class="bold">Twitter Gaming
                            Headers Pack 04</a>
                        </div>
                        <div class="publish-date">37 minutes ago</div>
                      </div>
                    </div>
                    <!--/notification-item-->
                    <!--notification-item-->
                    <div class="notification">
                      <div class="thumb-box"><img  :src="BASE_URL + 'assets/img/content/notifications/notif-thumb-1.png'" height="50" width="50" alt="" loading="lazy">
                        <span class="review-type">
                          <svg class="crumina-icon">
                            <use xlink:href="#star-icon"></use>
                          </svg>
                        </span>
                      </div>
                      <div class="notification-info">
                        <div class="message"><a href="08-profile-page.html" class="bold">@CrimsonRay</a> just reviewed
                          <a href="05-product-page.html" class="bold">Cryptoki NFT and Digital Market PSD Template</a>
                        </div>
                        <div class="publish-date">49 minutes ago</div>
                      </div>
                    </div>
                    <!--/notification-item-->
                  </div>
                  <a href="25-notifications.html" class="btn-small-fullwidth btn-dark btn-square">View all
                    Notifications</a>
                </div>
              </div>
              <!--/notification dropdown-->
              <!--/NOTIFICATION BUTTON-->
            </div>
            <!--/HEADER ICONS-->
  
            <div class="header-user-profile cryptoki-notif-bttn" data-target="profile-dropdown">
              <!--user-meta-->
              <div class="user-meta">
                <div class="user_name">Dexter Stark</div>
                <div class="user_score"><span><svg class="crumina-icon">
                      <use xlink:href="#circle-icon"></use>
                    </svg></span>291.36 ETH</div>
              </div>
              <!--/user-meta-->
              <!--user-avatar-->
              <div class="avatar box-42">
                <picture>
                  <source type="image/avif" srcset="avif/avatar.avif" />
                  <img  :src="BASE_URL + 'assets/img/avatar.png'" alt="avatar" loading="lazy" width="100" height="100">
                </picture>
  
                <span class="verified"><svg class="crumina-icon">
                    <use xlink:href="#check-icon"></use>
                  </svg></span>
              </div>
              <!--/user-avatar-->
              <!--close-icon-->
              <div class="closing-icon">
                <svg class="crumina-icon close-icon">
                  <use xlink:href="#cross-icon"></use>
                </svg>
              </div>
              <!--/close-icon-->
              <div id="profile-dropdown" class="cryptoki-notif-target">
                <div class="profile-dropdown-header profile-cover-image"></div>
                <div class="profile-dropdown-body">
                  <div class="profile-heading">
                    <!--user-avatar-->
                    <div class="profile-avatar avatar box-26">
                      <img  :src="BASE_URL + 'assets/img/avatar.png'" alt="avatar" loading="lazy" height="100" width="100">
                      <span class="verified"><svg class="crumina-icon">
                          <use xlink:href="#check-icon"></use>
                        </svg></span>
                    </div>
                    <!--/user-avatar-->
                    <div class="profile-link">
                      <a class="btn btn-small gradient-background" href="08-profile-page.html">My Profile</a>
                    </div>
                  </div>
                  <!--user-menu-->
                  <ul class="profile-menu">
                    <li class="profile">
                      <a href="23-profile-info.html"><svg class="crumina-icon">
                          <use xlink:href="#user-icon"></use>
                        </svg>Profile Info</a>
                    </li>
                    <li class="account">
                      <a href="29-account-settings.html"><svg class="crumina-icon">
                          <use xlink:href="#settings-icon"></use>
                        </svg>Account Settings</a>
                    </li>
                    <li class="notification">
                      <a href="30-notification-settings.html"><svg class="crumina-icon">
                          <use xlink:href="#slide-filter-icon"></use>
                        </svg>Notification Settings</a>
                    </li>
                    <li class="artwork">
                      <a href="26-upload-artwork.html"><svg class="crumina-icon">
                          <use xlink:href="#picture-icon"></use>
                        </svg>Create Artwork</a>
                    </li>
                    <li class="wallet">
                      <a href="18-connect-a-wallet.html"><svg class="crumina-icon">
                          <use xlink:href="#wallet-icon"></use>
                        </svg>Wallet info</a>
                    </li>
                    <li class="verification">
                      <a href="31-get-verified.html"><svg class="crumina-icon">
                          <use xlink:href="#circle-checked-icon"></use>
                        </svg>Get Verified</a>
                    </li>
                    <li class="logout">
                      <a href="%21.html#"><svg class="crumina-icon">
                          <use xlink:href="#logout-icon"></use>
                        </svg>Log Out</a>
                    </li>
                  </ul>
                  <!--/user-menu-->
                </div>
                <div class="profile-dropdown-footer">
                  <!--dark-mode-toggle-->
                  <div class="mode-toggle">
                    <div class="mode-title"><span><svg class="crumina-icon">
                          <use xlink:href="#moon-icon"></use>
                        </svg></span>Night-mode</div>
                    <label class="toggle-control">
                      <input type="checkbox" checked="checked">
                      <span class="control"></span>
                    </label>
                  </div>
                  <!--/dark-mode-toggle-->
                </div>
              </div>
            </div>
  
          </div>
        </div>
        <!--MOBILE SEARCH FORM-->
        <div id="mobile-search-block">
          <form action="#" id="mobile-search-form">
            <input type="text" class="search-input" name="mobile-search" placeholder="Enter your search here...">
            <button class="search-button"><svg class="crumina-icon">
                <use xlink:href="#search-icon"></use>
              </svg></button>
          </form>
        </div>
        <!--/MOBILE SEARCH FORM-->
      </header>
</template>

<script>
export default {
name:'headerPanel',
data(){
  return {
       BASE_URL: process.env.BASE_URL,
  }
}
}
</script>

<style>

</style>