<?php
/**
 * @file
 * course_list.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function course_list_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'course_list';
  $view->description = 'A view showing all listed courses (Course Types)';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Course List';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Training & Learning';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Course length */
  $handler->display->display_options['fields']['field_course_length']['id'] = 'field_course_length';
  $handler->display->display_options['fields']['field_course_length']['table'] = 'field_data_field_course_length';
  $handler->display->display_options['fields']['field_course_length']['field'] = 'field_course_length';
  $handler->display->display_options['fields']['field_course_length']['label'] = '';
  $handler->display->display_options['fields']['field_course_length']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_course_length']['alter']['text'] = '(<em>[field_course_length-value]</em>)';
  $handler->display->display_options['fields']['field_course_length']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'course_type' => 'course_type',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['header'] = FALSE;
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['label'] = 'Introduction';
  $handler->display->display_options['header']['area']['empty'] = TRUE;
  $handler->display->display_options['header']['area']['content'] = '<p>
ODI is committed to providing world class training in the area of Open and Linked Data Technologies. This will enable the ODI to inspire the next generation of Open Data entrepreneurs, developers, technologists, and evangelists.
</p>
<p>
A variety of training courses will be offered, the main one being an accredited postgraduate certificate in Open Data Technologies. This intensive short course will equip people with the tools, techniques and business methods of Open Data publication and application construction. Year 1 material will be developed for a single first year cohort comprising a total of 25 Open Data Technologists. In subsequent years a minimum of two cohorts will be accepted. The goal by the end of the first five years of operation will be to have trained at least 225 Open Data Technologists. 
</p>
<p>
An Open Data Fellowship Programme will also be constructed. This will cover the same core material as for the Open Data Technologists. In addition these individuals will be involved in the acquisition of experience and knowledge around Open Data policy, standards and an understanding of the necessary skills for developing Open Data capabilities within organisations.  They will work to support some of our startup companies, larger private companies and public sector organisations in their formulation of Open Data strategies. 
</p>
<p>
As part of the Fellows’ programme of study they will serve as ‘Open Data Evangelists’ in public and private sector organisations. Their explicit role will be to create sustainable knowledge and understanding of Open Government Data (OGD) exploitation and business opportunities within the organisations in which they are placed. All of this will be to support capability building and best practice. In year 1 we will aim for six Fellows and in subsequent years twelve. 
</p>';
  $handler->display->display_options['header']['area']['format'] = 'filtered_html';
  $handler->display->display_options['path'] = 'courses';
  $export['course_list'] = $view;

  $view = new view();
  $view->name = 'upcoming_courses';
  $view->description = 'A view showing all the course instances of a particular type';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Upcoming courses';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['css_class'] = 'event-instances';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '10';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'title' => 'title',
    'field_startend_datetime' => 'field_startend_datetime',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_startend_datetime' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Field: Content: Start/End Date/Time */
  $handler->display->display_options['fields']['field_startend_datetime']['id'] = 'field_startend_datetime';
  $handler->display->display_options['fields']['field_startend_datetime']['table'] = 'field_data_field_startend_datetime';
  $handler->display->display_options['fields']['field_startend_datetime']['field'] = 'field_startend_datetime';
  $handler->display->display_options['fields']['field_startend_datetime']['label'] = 'Date';
  $handler->display->display_options['fields']['field_startend_datetime']['alter']['text'] = '<a href="[path]">[field_startend_datetime]</a>';
  $handler->display->display_options['fields']['field_startend_datetime']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_startend_datetime']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Content: Location */
  $handler->display->display_options['fields']['field_course_location']['id'] = 'field_course_location';
  $handler->display->display_options['fields']['field_course_location']['table'] = 'field_data_field_course_location';
  $handler->display->display_options['fields']['field_course_location']['field'] = 'field_course_location';
  /* Field: Content: Path */
  $handler->display->display_options['fields']['path']['id'] = 'path';
  $handler->display->display_options['fields']['path']['table'] = 'node';
  $handler->display->display_options['fields']['path']['field'] = 'path';
  $handler->display->display_options['fields']['path']['label'] = '';
  $handler->display->display_options['fields']['path']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['path']['alter']['text'] = 'More details';
  $handler->display->display_options['fields']['path']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['path']['alter']['path'] = '[path]';
  $handler->display->display_options['fields']['path']['alter']['link_class'] = 'btn btn-info btn-small';
  $handler->display->display_options['fields']['path']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['path']['absolute'] = TRUE;
  /* Field: Content: Eventbrite URL */
  $handler->display->display_options['fields']['field_course_eventbrite_url']['id'] = 'field_course_eventbrite_url';
  $handler->display->display_options['fields']['field_course_eventbrite_url']['table'] = 'field_data_field_course_eventbrite_url';
  $handler->display->display_options['fields']['field_course_eventbrite_url']['field'] = 'field_course_eventbrite_url';
  $handler->display->display_options['fields']['field_course_eventbrite_url']['label'] = '';
  $handler->display->display_options['fields']['field_course_eventbrite_url']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_course_eventbrite_url']['alter']['text'] = 'Book now';
  $handler->display->display_options['fields']['field_course_eventbrite_url']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_course_eventbrite_url']['alter']['path'] = '[field_course_eventbrite_url-value]';
  $handler->display->display_options['fields']['field_course_eventbrite_url']['alter']['link_class'] = 'btn btn-primary btn-small';
  $handler->display->display_options['fields']['field_course_eventbrite_url']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Course Type (field_course_type) */
  $handler->display->display_options['arguments']['field_course_type_target_id']['id'] = 'field_course_type_target_id';
  $handler->display->display_options['arguments']['field_course_type_target_id']['table'] = 'field_data_field_course_type';
  $handler->display->display_options['arguments']['field_course_type_target_id']['field'] = 'field_course_type_target_id';
  $handler->display->display_options['arguments']['field_course_type_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_course_type_target_id']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['field_course_type_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_course_type_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_course_type_target_id']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'course_instance' => 'course_instance',
  );
  /* Filter criterion: Content: Start/End Date/Time -  start date (field_startend_datetime) */
  $handler->display->display_options['filters']['field_startend_datetime_value']['id'] = 'field_startend_datetime_value';
  $handler->display->display_options['filters']['field_startend_datetime_value']['table'] = 'field_data_field_startend_datetime';
  $handler->display->display_options['filters']['field_startend_datetime_value']['field'] = 'field_startend_datetime_value';
  $handler->display->display_options['filters']['field_startend_datetime_value']['operator'] = '>=';
  $handler->display->display_options['filters']['field_startend_datetime_value']['default_date'] = 'today';

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $export['upcoming_courses'] = $view;

  return $export;
}
