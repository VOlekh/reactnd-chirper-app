export const SET_AUTHED_USER = 'SET_AUTHED_USER'

// export set authed user action creator
export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    //take an id of authenticated user, set it and pass
    id,
  }
} 