export interface ICar {
  id: number;
  model: string;
  km: number;
  year: number;
  brand: string;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type TCreateBody = Omit<ICar, 'id' | 'createdAt' | 'updatedAt'>;
export type TupdateBody = Partial<TCreateBody>;
