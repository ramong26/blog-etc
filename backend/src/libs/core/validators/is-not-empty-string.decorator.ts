import { isNotEmpty, isString, registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export function IsNotEmptyString(validationOptions?: ValidationOptions): PropertyDecorator {
    return (target, propertyKey: string | symbol) => {
        registerDecorator({
            name: 'isNonEmptyString',
            target: target.constructor,
            propertyName: propertyKey.toString(),
            options: validationOptions,
            validator: {
                validate: (value: any): boolean => isString(value) && isNotEmpty(value.trim()),
                defaultMessage: (validationArguments?: ValidationArguments): string =>
                    `${validationArguments?.property} should not be an empty string`,
            },
        });
    };
}
