import {defineProps} from "vue";

type Props = {
    title: string
}

defineProps<Props>()

const C = ({title}: Props) => {
    return (
        <div>
            <div>{title}</div>
        </div>

    )
}
export default C