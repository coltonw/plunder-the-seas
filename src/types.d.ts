export type Card = {
  name: string;
  type:
    | "equipment"
    | "crew"
    | "event"
    | "announcement"
    | "training"
    | "upgrade";
  cost: number;
  resource: number;
  ability: {
    cannon?: number;
    swashbuckling?: number;
    explosive?: number;
    carousing?: number;
    shiftiness?: number;
  };
};
