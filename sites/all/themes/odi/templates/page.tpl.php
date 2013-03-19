<?php
/**
 * @file
 * Zen theme's implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $secondary_menu_heading: The title of the menu used by the secondary links.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['header']: Items for the header region.
 * - $page['navigation']: Items for the navigation region, below the main menu (if any).
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['footer']: Items for the footer region.
 * - $page['bottom']: Items to appear at the bottom of the page below the footer.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see zen_preprocess_page()
 * @see template_process()
 */

function render_svg ($svg, $w, $h, $alt = '') {
  $png = str_replace(".svg", ".png", $svg);

  echo '
          <img src="' . $svg . '" alt="' . $alt . '" class="b_svg" width="'. $w . '" height ="'. $h . '">
          <img src="' . $png . '" alt="' . $alt . '" class="b_png" width="'. $w . '" height ="'. $h . '">';
}
?>
<script type="template/html" id="cookie-notification-template">
  <div id="cookie-notification">
    <div class="container">
      <div class="row-fluid">
        <div class="span3 title">Cookies on the ODI Website</div>
        <div class="span6 description">This website uses cookies to provide you with the best experience.</div>
        <div class="span3 links">
          <a class="btn btn-info continue" href="javascript:;">Continue</a><br>
          <a class="more" href="<?php global $base_url; print $base_url; ?>/cookie-policy">Find out more</a>
        </div>
      </div>
    </div>
  </div>
</script>

<div class="header-bg"></div>

<div id="page" class="container">

  <header id="header" role="banner">
    <div class="branding">
      <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
          <?php print render_svg($logo, 131, 54, t('Home')); ?>
        </a>
      <?php endif; ?>

      <?php if ($site_name || $site_slogan): ?>
        <hgroup id="name-and-slogan">

          <?php if ($site_name): ?>
            <?php $use_name_pic = $logo && ($site_name == 'Open Data Institute'); ?>
            <h1 id="site-name">
              <a href="<?php print $front_page; ?>" title="<?php print $site_name; ?>" rel="home">
              <?php if ($use_name_pic): ?>
                <?php print render_svg(str_replace(".svg", "_a.svg", $logo), 326, 30, $site_name); ?>
              <?php else: ?>
                <span><?php print $site_name; ?></span>
              <?php endif; ?>
              </a>
            </h1>
          <?php endif; ?>

          <?php if ($site_slogan): ?>
            <?php $use_slogan_pic = $logo && ($site_slogan == 'Knowledge For Everyone'); ?>
            <h2 id="site-slogan">
	    <?php $use_slogan_pic = false; ?>
            <?php if ($use_slogan_pic): ?>
              <?php print render_svg(str_replace(".svg", "_b.svg", $logo), 246, 14, $site_slogan); ?>
            <?php else: ?>
              <?php print $site_slogan; ?>
            <?php endif; ?>
            </h2>
          <?php endif; ?>
        </hgroup>
      <?php endif; ?>
    </div>

    <div id="main-menu-navbar" class="navbar navbar-inverse">
      <div class="navbar-inner">
        <?php if ($main_menu): ?>
          <nav id="main-menu" role="navigation" class="container">
            <?php
            // This code snippet is hard to modify. We recommend turning off the
            // "Main menu" on your sub-theme's settings form, deleting this PHP
            // code block, and, instead, using the "Menu block" module.
            // @see http://drupal.org/project/menu_block
            print theme('links__system_main_menu', array(
              'links' => $main_menu,
              'attributes' => array(
                'class' => array('links', 'inline', 'clearfix', 'nav'),
              ),
              'heading' => array(
                'text' => t('Main menu'),
                'level' => 'h2',
                'class' => array('element-invisible'),
              ),
            )); ?>
          </nav>
          <div id="main-menu-pointer" class="<?php if ($secondary_menu) { print('to-subnav'); } ?>"></div>
        <?php endif; ?>
      </div>
    </div>
    <?php if ($secondary_menu): ?>
      <div id="secondary-menu-navbar" class="navbar">
        <div class="navbar-inner">
          <nav id="sub-menu" role="navigation" class="container">
            <?php print theme('links__system_secondary_menu', array(
              'links' => $secondary_menu,
              'attributes' => array(
                'class' => array('links', 'inline', 'clearfix', 'nav', 'nav-pills'),
              ),
              'heading' => array(
                'text' => $secondary_menu_heading,
                'level' => 'h2',
                'class' => array('element-invisible'),
              ),
            )); ?>
          </nav>
        </div>
      </div>
    <?php endif; ?>


    <?php print render($page['header']); ?>

  </header>

  <?php print $breadcrumb; ?>
    
  <div id="main" class="row-fluid">

    <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);

      $noCols = 1;
      if ($sidebar_first) { $noCols++; }
      if ($sidebar_second) { $noCols++; }

      $mainSize = $noCols == 1 ? 12 : (
          $noCols == 2 ? 9 : 6);
    ?>

    <?php if ($sidebar_first): ?>
      <aside id="sidebar_first" class="sidebar span3">
        <?php print $sidebar_first; ?>
      </aside>
    <?php endif; ?>
      
    <div id="content" class="column span<?php print $mainSize; ?>" role="main">
      <?php print render($page['highlighted']); ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print str_replace('ul class="tabs', 'ul class="nav nav-pills tabs', render($tabs)); // URGGGGHHHH ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div>

    <?php if ($sidebar_second): ?>
      <aside id="sidebar_second" class="sidebar span3 hidden-phone">
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>

  </div>

  <?php
  $below_content = render($page['below_content']);
  if ($below_content): ?>
    <aside id="below_content">
      <?php
      print str_replace('region-below-content', 'region-below-content row-fluid', $below_content);
      ?>
    </aside>
  <?php endif; ?>

  <div id="navigation">
    <?php print render($page['navigation']); ?>
  </div>

  <div class="row-fluid footer-container">
    <div class="span12">
      <?php print render($page['footer']); ?>
    </div>
    <!--<div class="qr-code span2 hidden-phone"></div>-->
  </div>
</div>
<?php print render($page['bottom']); ?>
<div class="footer-bg"></div>
<!-- ie fix https://github.com/empowering-communities/Bootstrap-IE6 -->
<script type="text/javascript"> jQuery(function($){if($.browser.msie&&parseInt($.browser.version,10)===6){$('.row div[class^="span"]:last-child').addClass("last-child");$('[class="span"]').addClass("margin-left-20");$(':button[class="btn"], :reset[class="btn"], :submit[class="btn"], input[type="button"]').addClass("button-reset");$(":checkbox").addClass("input-checkbox");$('[class^="icon-"], [class=" icon-"]').addClass("icon-sprite");$(".pagination li:first-child a").addClass("pagination-first-child")}}) </script>
