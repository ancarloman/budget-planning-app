import { Input } from "@/components/ui/input"
import * as React from "react"

function EditableCell({
  value: initialValue,
  onSave,
  type = "text",
}: {
  value: any
  onSave: (value: any) => void
  type?: "text" | "number"
}) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <Input
      type={type}
      value={value}
      onChange={(e) =>
        setValue(type === "number" ? Number(e.target.value) : e.target.value)
      }
      onBlur={() => onSave(value)}
      className="h-8 border-0"
    />
  )
}
export default EditableCell;