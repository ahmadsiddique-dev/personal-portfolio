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