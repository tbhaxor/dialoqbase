import { FastifySchema } from "fastify";

export const chatRequestSchema: FastifySchema = {
  tags: ["Bot", "Playground"],
  summary: "API to send message to bot on playground",
  headers: {
    type: "object",
    properties: {
      Authorization: { type: "string" },
    },
    required: ["Authorization"],
  },
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  },
  body: {
    type: "object",
    required: ["message"],
    properties: {
      message: {
        type: "string",
      },
      history_id: {
        type: "string",
      },
    },
  },
};

export const chatRequestStreamSchema: FastifySchema = {
  tags: ["Bot", "Playground"],
  summary: "API to get stream of message from bot on playground",
  headers: {
    type: "object",
    properties: {
      Authorization: { type: "string" },
    },
    required: ["Authorization"],
  },
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  },
};

export const chatPlaygroundHistorySchema: FastifySchema = {
  tags: ["Bot", "Playground"],
  summary: "API to get history of message from bot on playground",
  headers: {
    type: "object",
    properties: {
      Authorization: { type: "string" },
    },
    required: ["Authorization"],
  },
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  },
};

export const chatPlaygroundHistoryIdSchema: FastifySchema = {
  tags: ["Bot", "Playground"],
  summary: "API to get history of message from bot on playground by history id",
  headers: {
    type: "object",
    properties: {
      Authorization: { type: "string" },
    },
    required: ["Authorization"],
  },
  params: {
    type: "object",
    required: ["id", "history_id"],
    properties: {
      id: {
        type: "string",
      },
      history_id: {
        type: "string",
      },
    },
  },
};

export const audioSettingsSchema: FastifySchema = {
  tags: ["Bot", "Playground"],
  summary: "API to get audio settings from bot on playground",
  headers: {
    type: "object",
    properties: {
      Authorization: { type: "string" },
    },
    required: ["Authorization"],
  },
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  },
  body: {
    type: "object",
    required: ["type", "enabled"],
    properties: {
      type: {
        type: "string",
      },
      enabled: {
        type: "boolean",
      },
    },
  },
};

export const updateBotPlaygroundTitleByIdSchema: FastifySchema = {
  tags: ["Bot", "Playground"],
  summary: "API to update bot playground title by id",
  headers: {
    type: "object",
    properties: {
      Authorization: { type: "string" },
    },
    required: ["Authorization"],
  },
  body: {
    type: "object",
    required: ["title"],
    properties: {
      title: {
        type: "string",
      },
    },
  },
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  }
};

export const deleteBotByPlaygroundIdSchema: FastifySchema = {
  tags: ["Bot", "Playground"],
  summary: "API to delete bot playground by id",
  headers: {
    type: "object",
    properties: {
      Authorization: { type: "string" },
    },
    required: ["Authorization"],
  },
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  },
};
