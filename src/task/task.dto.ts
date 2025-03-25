import { Status } from '@prisma/client'
import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator'

export class TaskDto {
	@IsString()
	@IsOptional()
	title: string

	@IsBoolean()
	@IsOptional()
	isCompleted?: boolean

	@IsString()
	@IsOptional()
	createdAt?: string

	@IsEnum(Status)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	status?: Status
}
