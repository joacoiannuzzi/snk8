import R from "ramda"

type Point = {
  x: number
  y: number
}

type State = {
  rows: number
  cols: number
  body: Point[]
  direction: Point
  speed: number
}

const NORTH: Point = { x: 0, y: -1 }
const SOUTH: Point = { x: 0, y: 1 }
const EAST: Point = { x: 1, y: 0 }
const WEST: Point = { x: -1, y: 0 }

const nextHead = ({ body: [head], direction, rows, cols }: State): Point => ({
  x: R.mathMod(cols)(head.x + direction.x),
  y: R.mathMod(rows)(head.y + direction.y),
})

const nextBody = (state: State): Point[] => [nextHead(state), ...state.body]

const nextSpeed = ({ speed }: State): number => speed

export const initialState: State = {
  rows: 20,
  cols: 30,
  body: [{ x: 10, y: 10 }],
  direction: EAST,
  speed: 30,
}

export const next = R.applySpec({
  rows: R.prop("rows"),
  cols: R.prop("cols"),
  direction: R.prop("direction"),
  body: nextBody,
  speed: nextSpeed,
})

const invert = (p: Point): Point => ({ x: p.y, y: p.x })

const multiply = (n: number) => (p: Point): Point => ({
  x: p.x * n,
  y: p.y * n,
})

export const changeDir = (state: State, move: "LEFT" | "RIGHT"): State => ({
  ...state,
  direction: R.pipe(
    invert,
    multiply(
      R.equals(state.direction, NORTH)
        ? move === "RIGHT"
          ? -1
          : 1
        : move === "RIGHT"
        ? 1
        : -1
    )
  )(state.direction),
})
