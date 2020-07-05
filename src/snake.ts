import R from "ramda"

type Point = {
  x: number
  y: number
}

type State = {
  body: Point[]
  food: Point
  direction: Point
  speed: number
}

export const ROWS = 20
export const COLS = 30

export const UP: Point = { x: 0, y: -1 }
export const DOWN: Point = { x: 0, y: 1 }
export const RIGHT: Point = { x: 1, y: 0 }
export const LEFT: Point = { x: -1, y: 0 }

// const pointEq = (p1: Point) => (p2: Point) => p1.x == p2.x && p1.y == p2.y

const willEat = (state: State) => R.equals(updateHead(state), state.food)
const willCrash = (state: State) =>
  R.find(R.equals(updateHead(state)))(state.body)

const updateHead = (state: State): Point =>
  state.body.length == 0
    ? { x: 2, y: 2 }
    : {
        x: R.mathMod(COLS)(state.body[0].x + state.direction.x),
        y: R.mathMod(ROWS)(state.body[0].y + state.direction.y),
      }

const updateBody = (state: State): State => {
  return state
}

const updateFood = (state: State): State => {
  return state
}

const updateSpeed = (state: State): State => {
  return state
}

export const initialState: State = {
  body: [
    { x: 20, y: 20 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
  ],
  food: { x: 30, y: 30 },
  direction: RIGHT,
  speed: 30,
}

const update = R.applySpec({
  body: updateBody,
  food: updateFood,
  direction: R.prop("direction"),
  speed: updateSpeed,
})
