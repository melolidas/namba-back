import { IsOptional, IsString, MinLength, IsEmail } from 'class-validator'

export class UserDto {
	@IsEmail()
	@IsOptional()
	email: string

	@IsString()
	@IsOptional()
	name?: string

	@IsOptional()
	@MinLength(6, {
		message: 'Password must be atleast 6 characters long'
	})
	@IsString()
	password: string
}
