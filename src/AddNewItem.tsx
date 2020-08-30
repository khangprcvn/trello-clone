import React, { useState } from 'react'

import { AddItemButton } from './styles'
import NewItemForm from './NewItemForm'

interface AddNewItemPros {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}

const AddNewItem = (props: AddNewItemPros) => {
  const [showForm, setShowForm] = useState(false)
  const { onAdd, toggleButtonText, dark } = props

  if (showForm) {
    // Show item creation form
    return (
      <NewItemForm
        onAdd={text => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}

export default AddNewItem
