export interface MessageParent {
  chatId: string,
  lastMessage: string,
  userName: string,
  image: string
}

export interface SpamMessage extends MessageParent {
  userId: string
}

export interface ArchiveMessage extends MessageParent {
  archived: string
}


