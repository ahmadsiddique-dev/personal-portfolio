// OH SORRY : I found anoter way to manage states so then there was no need of Zustand. 
import {create} from "zustand"

const messageStore = create((set) => ({
  detail : {
    name :"",
    message : "",
    track: ""
  },
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

export default messageStore;