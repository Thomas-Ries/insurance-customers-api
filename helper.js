exports.success = (message, data) => {
    return { message, data }
};

exports.getUniqueId = (customersApi) => {
    const customerIds = customersApi.map(customer => customer.id);
    const maxId = customerIds.reduce((a, b) => Math.max(a, b));
    const uniqueId = maxId + 1;

    return uniqueId;
}