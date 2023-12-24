type AbilityValue = number | number[];

export type Card = {
  name: string;
  type:
    | "equipment"
    | "crew"
    | "event"
    | "announcement"
    | "training"
    | "upgrade"
    | "publicObjective"
    | "privateObjective"
    | "publicEvent";
  cost: number;
  resource: number;
  dispose?: boolean;
  ability: {
    cannon?: AbilityValue;
    swashbuckling?: AbilityValue;
    explosive?: AbilityValue;
    carousing?: AbilityValue;
    shiftiness?: AbilityValue;
    move?: AbilityValue;
    resource?: AbilityValue;
    perCrew?: boolean;
    custom?: string;
  };
};
