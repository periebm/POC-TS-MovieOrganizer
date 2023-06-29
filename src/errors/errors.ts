export function conflictError(e:(string|number)) {
    return {
      type: "ConflictError",
      message: `${e ? e : "It"} already exists!`
    }
  }

  export function notFoundError(e:(string|number)) {
    return {
      type: "NotFoundError",
      message: `${e ? e : "It"} was not found`
    }
  }