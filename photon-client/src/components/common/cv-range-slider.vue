<template>
  <div>
    <v-row
      dense
      align="center"
    >
      <v-col :cols="2">
        <span>{{ name }}</span>
      </v-col>
      <v-col :cols="10">
        <v-range-slider
          :value="localValue"
          :max="max"
          :min="min"
          hide-details
          class="align-center"
          dark
          color="#ffd843"
          :step="step"
          @input="handleInput"
          @mousedown="$emit('rollback', localValue)"
        >
          <template v-slot:prepend>
            <v-text-field
              dark
              :value="localValue[0]"
              :max="max"
              :min="min"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 50px"
              :step="step"
              @input="handleChange"
              @focus="prependFocused = true"
              @blur="prependFocused = false"
            />
          </template>

          <template v-slot:append>
            <v-text-field
              dark
              :value="localValue[1]"
              :max="max"
              :min="min"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 50px"
              :step="step"
              @input="handleChange"
              @focus="appendFocused = true"
              @blur="appendFocused = false"
            />
          </template>
        </v-range-slider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    export default {
        name: 'RangeSlider',
        props: ['name', 'min', 'max', 'value', 'step'],
        data() {
            return {
                prependFocused: false,
                appendFocused: false

            }
        },
        computed: {
            localValue: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value)
                }
            }
        },
        methods: {
            handleChange(val) {
                let i = 0;
                if (this.prependFocused === false && this.appendFocused === true) {
                    i = 1;
                }
                if (this.prependFocused || this.appendFocused) {
                    this.$set(this.localValue, i, val);
                    this.$emit('rollback', this.localValue)
                }
            },
            handleInput(val) {
                if (!this.prependFocused || !this.appendFocused) {
                    this.localValue = val;
                }
            }
        }
    }
</script>

<style lang="" scoped>

</style>