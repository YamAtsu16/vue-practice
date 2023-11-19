/**
 * 紹介フォームインターフェース
 */
export interface IntroductionModel {
  name: string | null,
  age: number | null,
  from: string | null,
  interested: string[] | null,
  learn: string[] | null,
}