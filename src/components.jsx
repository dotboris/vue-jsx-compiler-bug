const OPTIONS = ['A', 'B', 'C', 'D'];

export const Radio = {
  name: 'Radio',

  data () {
    return {
      selected: null
    }
  },
  
  render () {
    return (
      <div>
        <h1>Radio test {this.selected}</h1>

        {OPTIONS.map(value => (
          <p>
            <label>
              {value}{' '}
              <input
                type='radio'
                value={value}
                vModel={this.selected}
              />
            </label>
          </p>
        ))}

      </div>
    );
  }
};

export const Text = {
  name: 'Text',

  data () {
    return {
      text: ''
    }
  },

  render () {
    return (() => (
      <div>
        <h1>Textbox test: {this.text}</h1>
        <p>
          <input
            type='text'
            vModel={this.text}
          />
        </p>
      </div>
    ))()
  }
}

export const TextArea = {
  name: 'TextArea',

  data () {
    return {
      text: ''
    }
  },

  render () {
    return (() => (
      <div>
        <h1>TextArea test: {this.text}</h1>
        <p>
          <textarea
            type='text'
            vModel={this.text}
          />
        </p>
      </div>
    ))()
  }
}

export const Select = {
  name: 'Select',

  data () {
    return {
      selected: null
    }
  },
  
  render () {
    return (() => (
      <div>
        <h1>Select test {this.selected}</h1>

        <select
          vModel={this.selected}
        >
          {OPTIONS.map(value => (
            <option value={value}>{value}</option>
          ))}
        </select>
      </div>
    ))();
  }
}

export const Checkbox = {
  name: 'Checkbox',

  data () {
    return {
      checked: false
    }
  },

  render () {
    return (() => (
      <div>
        <h1>Checkbox test {JSON.stringify(this.checked)}</h1>
        <label>
          Check me
          <input type='checkbox' vModel={this.checked} />
        </label>
      </div>
    ))()
  }
}