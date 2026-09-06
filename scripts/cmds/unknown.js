export const XarV2 = {
  config: {
    name: "test",
    aliases: ["t", "ts"],
    version: "1.0",
    author: "SK-SIDDIK-KHAN",
    countDown: 15,
    role: 0, 
    description: "This is a test command.",
    category: "utility",
    guide: "{pn} [args]",
    usePrefix: false 
  },
  onStart: async({ api, event, args, message, cmd }) => {
    await api.sendMessage(event.chat.id, "Command executed!");
  }
};