import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selectall',
  standalone: false,

  templateUrl: './selectall.component.html',
  styleUrl: './selectall.component.scss',
})
export class SelectallComponent implements OnInit {
  form!: FormGroup;
  values: string[] = [];
  itemlist: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  get selectall(): AbstractControl | any {
    return this.form.get('selectall');
  }

  get options(): AbstractControl | any {
    return this.form.get('options');
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      selectall: false,
      options: this.fb.group(
        this.itemlist.reduce((acc: any, cur: any) => {
          acc[cur] = false;
          console.log('acc:', acc);
          console.log('cur:', cur);
          return acc;
        }, {})
      ),
    });

    this.toggleitems();
    this.selectallitems();
  }

  toggleitems() {
    this.itemlist.forEach((item: string) => {
      this.options?.get(item)?.valueChanges.subscribe((val: boolean) => {
        console.log(val);
        if (val && !this.values.includes(item)) {
          this.values.push(item);
        } else {
          this.values = this.values.filter((val) => val !== item);
        }
        console.log(this.values);
        this.selectall?.setValue(this.values.length === this.itemlist.length, {
          emitEvent: false,
        });
      });
    });
  }

  selectallitems() {
    this.selectall?.valueChanges.subscribe((val: boolean) => {
      Object.values(this.options?.controls).forEach((control: any) => {
        control.setValue(val);
      });
    });
  }

  clearall() {
    this.selectall.setValue(false);
    Object.values(this.options?.controls).forEach((control: any) => {
      control.setValue(false);
    });
    console.log(this.values);
  }
}
