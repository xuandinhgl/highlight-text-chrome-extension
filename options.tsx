import { useState, useEffect } from "react"
import { getStoreValue, setStoreValue } from "~utils"


function IndexOptions() {
  const [data, setData] = useState("")
  const [color, setColor] = useState("#EAA522")
  const [background, setBackground] = useState("#FF0000")
  const [saveStatus, setSaveStatus] = useState(false)

  const labelStyle = {
    display: "block",
    marginBottom: 5
  }

  const successStyle = {
    marginTop: 10,
    color: "#0E9A1E",
    fontSize: 18
  }

  useEffect(() => {
    (async () => {
      let value = await getStoreValue()

      setData(value.wallet)
      setColor(value.color)
      setBackground(value.background)
    })()
  }, [])

  const saveData = () => {
    const value = {
      color,
      background,
      wallet: data.trim()
    }

    setStoreValue(JSON.stringify(value))
    setSaveStatus(true)

    setTimeout(() => {
      setSaveStatus(false)
    }, 5000)

  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        maxWidth: 500,
        margin: "0 auto"
      }}>
      <h2>
        Put wallet in text box bellow, 1 address per row
      </h2>
      <textarea rows={10} onChange={(e) => setData(e.target.value)} value={data} style={
        {
          marginBottom: 10,
          resize: "vertical",
          padding: 5
        }
      } />
      <h2>
        Select color
      </h2>
      <div style={{
        display: "flex",
        marginBottom: 10,
        gap: 10
      }}>
        <div style={{ marginRight: 20 }}>
          <label style={labelStyle} htmlFor="color">Color</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="color">Background</label>
          <input type="color" value={background} onChange={(e) => setBackground(e.target.value)} />
        </div>
      </div>
      <button onClick={saveData} style={{
        cursor: "pointer"
      }}>Save</button>
      {saveStatus &&
        <p style={successStyle}>
          Save success
        </p>
      }
    </div>
  )
}

export default IndexOptions
