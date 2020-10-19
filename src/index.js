import 'core-js';
import 'regenerator-runtime';
import Vue from 'vue';
import {
  Radio,
  Text,
  TextArea,
  Select,
  Checkbox
} from './components';

main()

function main () {
  mount(Radio);
  mount(Text);
  mount(TextArea);
  mount(Select);
  mount(Checkbox);
}

function mount (component) {
  const vue = new Vue({
    components: {
      target: component
    },

    render (h) {
      return h('target');
    }
  });

  const el = document.createElement('div');
  document.body.appendChild(el);
  vue.$mount(el);
}