import { test, expect } from "@playwright/test";

const host = "https://restful-booker.herokuapp.com";
const endPoint = '/booking/';
let token: string;
let bookingId: number;

test.describe.configure({ mode: "serial" });

test.beforeAll(async ({ request }) => {
    // Get authentication token before making any other API requests.
    let authEndPoint = '/auth';
    const response = await request.post(host + authEndPoint, {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            'username': 'admin',
            'password': 'password123'
        }
    });

    const jsonBody = await response.json();

    // Store authentication token for use in future requests.
    token = jsonBody.token;
});

test('Create a new booking @api', async ({ request }) => {
    // Create booking for Jim using POST.
    const response = await request.post(host + endPoint, {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            'token': token,
            'firstname': 'Jim',
            'lastname': 'Brown',
            'totalprice': 111,
            'depositpaid': true,
            'bookingdates': {
                'checkin': '2023-01-01',
                'checkout': '2023-01-31'
            },
            'additionalneeds': 'Breakfast'
        }
    });

    expect(response.status()).toEqual(200);

    const jsonBody = await response.json();
    expect(jsonBody.bookingid).toBeDefined();

    // Store booking id for fetching the booking.
    bookingId = jsonBody.bookingid;
});

test('Retrieve booking for Jim @api', async ({ request }) => {
    test.skip(bookingId == undefined, "Can not retrieve an undefined booking.");

    // Retrieve booking information using GET.
    const response = await request.get(host + endPoint + bookingId, {
        headers: {
            'Accept': 'application/json'
        }
    });

    expect(response.status()).toEqual(200);

    const jsonBody = await response.json();

    // Verify that booking is for Jim.
    expect(jsonBody.firstname).toBe('Jim');
});
