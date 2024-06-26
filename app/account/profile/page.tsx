import { Metadata } from 'next';

import SelectCountry from '@/app/_components/SelectCountry';

import { UpdateProfileForm } from '../_ui/UpdateProfileForm';

export const metadata: Metadata = {
  title: 'Profile',
};

export default function Page() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Update your guest profile
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
          defaultCountry="portugal"
        />
      </UpdateProfileForm>
    </div>
  );
}
