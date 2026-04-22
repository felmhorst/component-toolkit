export const Direction = {
    LEFT: "left",
    RIGHT: "right",
    UP: "up",
    DOWN: "down"
} as const;

export type Direction = typeof Direction[keyof typeof Direction];