import { create } from "zustand";;
import { useUserStore } from "./userStore";

export const useChatStore = create((set, get) => ({
  chatId: null,
  user: null,
  // currentUser: {
  //   id: "currentUserId",
  //   blocked: [],
  // },
  isCurrentuserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatId, user) => {
    // const currentUser = get().currentUser;
    const currentUser = useUserStore.getState().currentUser;

    if (!currentUser) {
      console.error("Current user is undefined");
      return;
    }

    // CHECK IF CURRENT USER IS BLOCKED
    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentuserBlocked: true,
        isReceiverBlocked: false,
      });
    }
    // CHECK IF RECEIVER IS BLOCKED
    else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user: null,
        isCurrentuserBlocked: false,
        isReceiverBlocked: true,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentuserBlocked: false,
        isReceiverBlocked: false,
      });
    }
  },
  changeBlock: () => {
    set(state => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  },
}));