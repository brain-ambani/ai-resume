-- AlterTable
ALTER TABLE "Resume" ALTER COLUMN "contact" DROP NOT NULL,
ALTER COLUMN "Summary" DROP NOT NULL,
ALTER COLUMN "experience" DROP NOT NULL,
ALTER COLUMN "skills" DROP NOT NULL,
ALTER COLUMN "education" DROP NOT NULL;
