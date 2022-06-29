<template>
    <!-- https://www.naiveui.com/zh-CN/light -->
    <!-- 米思米 -->
    <div>
        <n-table :bordered="false" :single-line="false">
            <thead>
                <tr>
                    <th style="width:150px;background-color:rgba(252,185,0,0.5);text-align: center; ">空心/实心</th>
                    <th>
                        <n-radio-group name="withHole" default-value="withHole">
                            <n-space>
                                <n-radio v-for="hole in holes" :key="hole.value" :value="hole.value"
                                    @change="handleChange">
                                    {{ hole.label }}
                                </n-radio>
                            </n-space>
                        </n-radio-group>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="width:150px;background-color:rgba(252,185,0,0.5);text-align: center">几通</td>
                    <td>
                        <n-radio-group name="radiogroup" default-value="threeWays">
                            <n-space>
                                <n-radio v-for="howMany in howManys" :key="howMany.value" :value="howMany.value"
                                    @change="handleChange">
                                    {{ howMany.label }}
                                </n-radio>
                            </n-space>
                        </n-radio-group>
                    </td>
                </tr>
            </tbody>
        </n-table>

    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NSpace, NRadio, NRadioGroup, NTable } from 'naive-ui'
export default defineComponent({
    setup() {
        const checkedValueRef = ref(null);
        return {

            checkedValue: checkedValueRef,
            value: ref(null),
            holes: [
                {
                    value: "withHole",
                    label: "空心"
                },
                {
                    value: "withoutHole",
                    label: "实心"
                },
            ].map((s) => {
                s.value = s.value.toLowerCase();
                return s;
            }),
            howManys: [
                {
                    value: "twoWays",
                    label: "两通"
                },
                {
                    value: "threeWays",
                    label: "三通"
                },
            ].map((s) => {
                s.value = s.value.toLowerCase();
                return s;
            }),
            handleChange(e) {
                checkedValueRef.value = e.target.value;
                console.log(e.target.value);
            },
        }
    },

    components: {
        NSpace, NRadio, NRadioGroup, NTable
    }
});
</script>