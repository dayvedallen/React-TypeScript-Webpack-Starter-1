import { Counter } from './Counter'

export const App = () => {
  return (
    <>
      <h1>
        Edit React Typescript Webpack starter tempate - {'  '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <Counter />
    </>
  )
}
