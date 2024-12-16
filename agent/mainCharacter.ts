import { Character, ModelPrividerName, defaultCharacter, Clients} from "@ai16z/eliza";

export const mainCharacter: Character = {
  ...defaultCharacter,
  clients: [Clients.TWITTER],
  modelProvider: ModelProviderName.CLAUDE_VERTEX,
  name:"Pauline"
}
