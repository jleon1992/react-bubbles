import React from 'react'

export const ColorForm = props => {
    const {newColor, setNewColor, addNewColor} = props
    return (
        <div>
            <form onSubmit={addNewColor}>
          <legend>Add Color color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setNewColor({ ...newColor, color: e.target.value })
              }
              value={newColor.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setNewColor({
                  ...newColor,
                  code: { hex: e.target.value }
                })
              }
              value={newColor.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">Add Color</button>
            
          </div>
        </form>
        </div>
    )
}

export default ColorForm