import Vue from 'vue';
import Component from '../../src/sandbox-component/sandbox-component';

describe('sandbox-component.vue', () => {
  // Intentional test error
  it('should error here', () => {
    throw new Error('test error');
  })
});
