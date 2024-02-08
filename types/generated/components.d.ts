import type { Schema, Attribute } from '@strapi/strapi';

export interface NewComponentOneNewComponentOne extends Schema.Component {
  collectionName: 'components_new_component_one_new_component_ones';
  info: {
    displayName: 'NewComponentOne';
    icon: 'arrowUp';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface NewComponentTwoNewComponentTwo extends Schema.Component {
  collectionName: 'components_new_component_two_new_component_twos';
  info: {
    displayName: 'NewComponentTwo';
    icon: 'bell';
  };
  attributes: {};
}

export interface TestComponentFiveTestComponentFive extends Schema.Component {
  collectionName: 'components_test_component_five_test_component_fives';
  info: {
    displayName: 'TestComponentFive';
    icon: 'arrowUp';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface TestComponentFourTestComponentFour extends Schema.Component {
  collectionName: 'components_test_component_four_test_component_fours';
  info: {
    displayName: 'TestComponentFour';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface TestComponentThreeTestComponentThree extends Schema.Component {
  collectionName: 'components_test_component_three_test_component_threes';
  info: {
    displayName: 'TestComponentThree';
    icon: 'bold';
    description: '';
  };
  attributes: {
    titletext: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'new-component-one.new-component-one': NewComponentOneNewComponentOne;
      'new-component-two.new-component-two': NewComponentTwoNewComponentTwo;
      'test-component-five.test-component-five': TestComponentFiveTestComponentFive;
      'test-component-four.test-component-four': TestComponentFourTestComponentFour;
      'test-component-three.test-component-three': TestComponentThreeTestComponentThree;
    }
  }
}
