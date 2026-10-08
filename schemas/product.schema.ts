import { z } from "zod";

export const createProductSchema = z.object({
  name_product: z
    .string()
    .trim()
    .min(3, "Nama minimal 3 karakter")
    .max(100, "Nama maksimal 100 karakter"),

  price_product: z
    .number()
    .finite()
    .positive("Harga harus lebih dari 0"),

  categories: z
    .string()
    .trim()
    .min(2, "Kategori minimal 2 karakter")
    .max(100, "Kategori maksimal 100 karakter"),

  desc: z
    .string()
    .trim()
    .min(2, "Deskripsi minimal 2 karakter")
    .max(1000, "Deskripsi maksimal 1000 karakter"),
});