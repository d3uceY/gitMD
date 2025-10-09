import { Button } from "@/components/ui/button"
import {
    ButtonGroup,
    ButtonGroupSeparator,
} from "@/components/ui/button-group"
import { useFormButtonGroup } from "@/context/FormButtonGroupContext"

export function FormButtonGroup() {
    const { form, setForm } = useFormButtonGroup();
    // rn - release notes
    // pr - pull request
    return (
        <ButtonGroup>
            <Button
                onClick={() => setForm('rn')}
                variant="secondary"
                size="sm"
                className="shadow-sm bg-white">
                Release
            </Button>
            <ButtonGroupSeparator />
            <Button
                onClick={() => setForm('pr')}
                variant="secondary"
                size="sm"
                className="shadow-sm bg-white">
                Pull Request
            </Button>
        </ButtonGroup>
    )
}
