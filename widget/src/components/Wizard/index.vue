<template>
  <component
    :is="store.currentComponent"
    @delect-feedback-type="handleSelectFeedbackType"
    @next="next"
  />
</template>

<script lang="ts">
import useNavigation, { Navigation } from '@/hooks/navigation'
import useStore from '@/hooks/store'
import SelectFeedbackType from './SelectFeedbackType.vue'
import WriteAFeedback from './WriteAFeedback.vue'
import Success from './Success.vue'
import ErrorState from './Error.vue'
import { setFeedbackType, StoreState } from '@/store'
import { defineComponent } from 'vue'

interface SetupReturn {
  store: StoreState;
  next: Navigation['next'];
  handleSelectFeedbackType(type: string): void;
}

export default defineComponent({
  components: { SelectFeedbackType, WriteAFeedback, Success, Error: ErrorState },
  setup (): SetupReturn {
    const store = useStore()
    const { next } = useNavigation()

    function handleSelectFeedbackType (type: string): void {
      setFeedbackType(type)
    }

    return {
      store,
      handleSelectFeedbackType,
      next
    }
  }
})
</script>
