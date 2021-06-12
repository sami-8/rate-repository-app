import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

export default function RepositoryOrderPicker({ options }) {
  const keys = Object.keys(options)
  const [selected, setSelected] = useState(keys[0])

  return (
    <Picker
      selectedValue={selected}
      onValueChange={(itemValue) => {
        const handleSelection = options[itemValue]
        setSelected(itemValue)
        handleSelection()
      }}>
      {keys.map(key =>
        <Picker.Item key={key} label={key} value={key} />
      )}
    </Picker>
  )
}

