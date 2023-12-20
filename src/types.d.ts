export type Card = {
  name: string;
  type:
    | "equipment"
    | "crew"
    | "event"
    | "announcement"
    | "training"
    | "upgrade"
    | "objective";
  cost: number;
  resource: number;
  dispose?: boolean;
  ability: {
    cannon?: number;
    swashbuckling?: number;
    explosive?: number;
    carousing?: number;
    shiftiness?: number;
    move?: number;
    resource?: number;
    perCrew?: boolean;
    custom?: string;
  };
};
