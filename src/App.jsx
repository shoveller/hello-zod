import './App.css'
import { z } from 'zod'

const schema = z.object({
    text: z.string().min(1, 'text 는 필숫값입니다.')
})

function App() {
  const handleSubmit = (callback) => {
      return (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries())
          const result = schema.safeParse(data)

          if (!result.success) {
              alert(JSON.stringify(result.error));
              return
          }

          callback(data)
      }
  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <input name="text" />
          <button type="submit">서브밋</button>
      </form>
  )
}

export default App
