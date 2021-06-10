import { Address } from "../components/main/models/Address";
import { Company } from "../components/main/models/Company";
import { Geo } from "../components/main/models/Geo";
import { User } from "../components/main/models/User";

export class MockUser {
    public static user = {
        id: "test",
        name: "test",
        username: "test",
        email: "test",
        phone: "test",
        website: "test",
        address: {
            street: "Test",
            suite: "Test",
            city: "Test",
            zipcode: "Test",
            geo: {
                lat: "Test",
                lng: "Test",
            } as Geo,
        } as Address,
        company: {
            name: "test",
            catchPhrase: "test",
            bs: "test",
        } as Company,
    } as User;
}