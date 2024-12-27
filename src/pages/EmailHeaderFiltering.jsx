import React from 'react';

const formConfig = {
    forms: [
        { number: 1, description: 'Filter for primary email headers', value: 'Urgent' },
        { number: 2, description: 'Filter for secondary email headers', value: 'example@example.com' }
    ]
};

const logicOptions = [
    { value: 'and', label: 'AND' },
    { value: 'or', label: 'OR' }
];

const operatorOptions = [
    { value: 'equals', label: 'Equal to (case insensitive)' },
    { value: 'notEquals', label: 'Not equal to' },
    { value: 'notEqualsCI', label: 'Not equal to (case insensitive)' },
    { value: 'contains', label: 'Contains' },
    { value: 'containsCI', label: 'Contains (case insensitive)' },
    { value: 'doesNotContain', label: 'Does not contain' },
    { value: 'doesNotContainCI', label: 'Does not contain (case insensitive)' },
    { value: 'startsWith', label: 'Start with' },
    { value: 'startsWithCI', label: 'Start with (case insensitive)' },
    { value: 'doesNotStartWith', label: 'Does not start with' },
    { value: 'doesNotStartWithCI', label: 'Does not start with (case insensitive)' },
    { value: 'endsWith', label: 'End with' },
    { value: 'endsWithCI', label: 'End with (case insensitive)' },
    { value: 'doesNotEndWith', label: 'Does not end with' },
    { value: 'doesNotEndWithCI', label: 'Does not end with (case insensitive)' },
    { value: 'matchesPattern', label: 'Matches pattern' },
    { value: 'matchesPatternCI', label: 'Matches pattern (case insensitive)' }
];

const EmailHeaderFiltering = () => {
    return (
        <div className='bg-white px-4 sm:px-6'>
            <div className='max-h-[calc(100vh-140px)] overflow-y-scroll hide-scrollbar'>
                {formConfig.forms.map((form, index) => (
                    <form key={index} className='mt-4 bg-gray-100 text-gray-600 p-4 rounded-2xl form-container'>
                        <h1 className='text-lg sm:text-xl mb-2 font-semibold'>Filter {form.number}</h1>
                        <h2 className='font-medium'>{form.description}</h2>
                        <label>
                            Email Field
                            <input type="text" className='mt-1 ml-2 p-2 w-full sm:w-40 h-6 rounded border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 outline outline-1 outline-gray-300' />
                        </label>
                        <div className='flex flex-col sm:flex-row justify-between mt-4 space-y-4 sm:space-y-0 sm:space-x-4'>
                            <div className='flex flex-col space-y-4 w-full'>
                                <label className='flex flex-col'>
                                    Logic
                                    <select className='mt-1 p-2 rounded border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 select-custom'>
                                        {logicOptions.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </label>
                                <label className='flex flex-col'>
                                    Value
                                    <input type="text" defaultValue={form.value} className='mt-1 p-2 rounded border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 outline outline-1 outline-gray-300' />
                                </label>
                            </div>
                            <div className='flex flex-col space-y-4 w-full'>
                                <label className='flex flex-col'>
                                    Operator
                                    <select className='mt-1 p-2 rounded border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 select-custom'>
                                        {operatorOptions.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                        </div>
                    </form>
                ))}
            </div>
        </div>
    );
};

export default EmailHeaderFiltering;
