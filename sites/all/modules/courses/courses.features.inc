<?php
/**
 * @file
 * courses.features.inc
 */

/**
 * Implements hook_node_info().
 */
function courses_node_info() {
  $items = array(
    'course_instance' => array(
      'name' => t('Course Instance'),
      'base' => 'node_content',
      'description' => t('An instance of a training or educational course.'),
      'has_title' => '1',
      'title_label' => t('Course Instance Description, e.g. Course Name (YYYY-MM-DD)'),
      'help' => '',
    ),
    'course_type' => array(
      'name' => t('Course Type'),
      'base' => 'node_content',
      'description' => t('A type of training or educational course.'),
      'has_title' => '1',
      'title_label' => t('Course Title'),
      'help' => '',
    ),
    'trainer' => array(
      'name' => t('Trainer'),
      'base' => 'node_content',
      'description' => t('Info about a trainer leading or contributing to a training course/seminar, who is *not* already an ODI team member.'),
      'has_title' => '1',
      'title_label' => t('Name'),
      'help' => '',
    ),
  );
  return $items;
}
