import { IsString } from "class-validator";

export class ResearchDto {
  @IsString()
  public researchId: string;

  @IsString()
  public deficiency: string;

  @IsString()
  public findings: string;

  @IsString()
  public researchCenter: string;
}